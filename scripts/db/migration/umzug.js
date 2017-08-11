const path = require('path');
const Umzug = require('umzug');

const sequelize = require('../../../src/db').createOrm();

const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelize,
  },
  migrations: {
    params: [
      sequelize.getQueryInterface(), // queryInterface
      sequelize.constructor, // DataTypes
    ],
    path: path.join(__dirname, '../../../src/migrations'),
    pattern: /^\d+-.*\.js$/,
  },
  logging: console.log,
});

const logUmzugEvent = eventName => name => console.log(`${name} ${eventName}`);

umzug.on('migrating', logUmzugEvent('migrating'));
umzug.on('migrated', logUmzugEvent('migrated'));
umzug.on('reverting', logUmzugEvent('reverting'));
umzug.on('reverted', logUmzugEvent('reverted'));

const cmdStatus = () => {
  let result = {};

  return umzug
    .executed()
    .then(executed => {
      result.executed = executed;
      return umzug.pending();
    })
    .then(pending => {
      result.pending = pending;
      return result;
    })
    .then(({ executed, pending }) => {
      executed = executed.map(m => {
        m.name = path.basename(m.file, '.js');
        return m;
      });
      pending = pending.map(m => {
        m.name = path.basename(m.file, '.js');
        return m;
      });

      const current =
        executed.length > 0 ? executed[0].file : '<NO_MIGRATIONS>';
      const status = {
        current: current,
        executed: executed.map(m => m.file),
        pending: pending.map(m => m.file),
      };

      console.log(JSON.stringify(status, null, 2));

      return { executed, pending };
    });
};

const cmdMigrate = () => {
  return umzug.up();
};

const cmdMigrateNext = () => {
  return cmdStatus().then(({ pending }) => {
    if (pending.length === 0) {
      return Promise.reject(new Error('No pending migrations'));
    }
    const next = pending[0].name;
    return umzug.up({ to: next });
  });
};

const cmdReset = () => {
  return umzug.down({ to: 0 });
};

const cmdResetPrev = () => {
  return cmdStatus().then(({ executed }) => {
    if (executed.length === 0) {
      return Promise.reject(new Error('Already at initial state'));
    }
    const prev = executed[executed.length - 1].name;
    return umzug.down({ to: prev });
  });
};

const cmd = process.argv[2].trim().toLowerCase();
let executedCmd;

console.log(`${cmd} BEGIN`);
switch (cmd) {
  case 'status':
    executedCmd = cmdStatus();
    break;

  case 'up':
  case 'migrate':
    executedCmd = cmdMigrate();
    break;

  case 'next':
  case 'migrate-next':
    executedCmd = cmdMigrateNext();
    break;

  case 'down':
  case 'reset':
    executedCmd = cmdReset();
    break;

  case 'prev':
  case 'reset-prev':
    executedCmd = cmdResetPrev();
    break;

  default:
    console.error(`invalid cmd: ${cmd}`);
    process.exit(1);
}

executedCmd
  .then(() => {
    const doneStr = `${cmd.toUpperCase()} DONE`;
    console.log(doneStr);
    console.log('='.repeat(doneStr.length));
  })
  .catch(err => {
    const errorStr = `${cmd.toUpperCase()} ERROR`;
    console.log(errorStr);
    console.log('='.repeat(errorStr.length));
    console.log(err);
    console.log('='.repeat(errorStr.length));
  })
  .then(() => {
    if (cmd !== 'status' && cmd !== 'reset-hard') {
      return cmdStatus();
    }
    return Promise.resolve();
  })
  .then(() => process.exit(0));
