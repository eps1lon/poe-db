# Requirements
python 3.4 for PyPoe

# install
```bash
$ git clone --recursive https://github.com/eps1lon/poe_db.git

# run in a python 3.4 virtualenv for PyPoE:
$ yarn install --production

# you might need to config PyPoE to find the Content.ggpk
$ yarn run load-content

# Be sure to set the necessary environment variables for the connection
$ yarn run db:build
```


## enironment variables
The following variables have to be set as environment variables in order to
authenticate to the database:
- `POEDB_HOST`
- `POEDB_USER` needs the following privileges
  - drop/create host wide for `db:create`, `db:drop`
  - all read/write privileges for the specified db
- `POEDB_PW`
- `POEDB_DB`

## dev environment
The repository should contain the latest models. If they are out of date
the package contains scripts to generate new ones. To do so run the following
commands:

```bash
$ yarn install
$ yarn run dev:parseContent
$ yarn run dev:models
```

Remember to add and run migrations if necessary.

### models
The models in src/models/base are auto generated. For specific scopes, 
getters, setters etc create or update the specific files in the corresponding folders.