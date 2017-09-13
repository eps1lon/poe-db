const cacheManager = require('cache-manager');
const cacheManagerFs = require('cache-manager-fs');
const fs = require('fs');
const path = require('path');

const game_version = require('../models/version');

const CACHE_ROOT = path.join(__dirname, '../../cache', game_version);

const mkdir = () => {
  if (!fs.existsSync(CACHE_ROOT)) {
    fs.mkdirSync(CACHE_ROOT);
  }
};

const createRealCache = prefix => {
  const cache = cacheManager.caching({
    store: cacheManagerFs,
    options: {
      maxsize: Number.POSITIVE_INFINITY,
      path: path.join(CACHE_ROOT, prefix),
      preventfill: false,
      fillcallback: () => console.log(`rehydrated cache for ${prefix}`),
    },
  });

  const actual_wrap = cache.wrap;

  // equivalent to original behavior but log cache misses
  cache.wrap = (tag, cache_cb, ...wrap_args) => {
    actual_wrap.call(
      cache,
      tag,
      (...responder_args) => {
        console.log(`cache miss '${prefix}':'${tag}'`);

        cache_cb.call(cache, ...responder_args);
      },
      ...wrap_args,
    );
  };

  return cache;
};

const createVirtualCache = prefix => {
  // emulate the interface of cacheManager.cache but dont provide any
  // caching functionality
  return {
    wrap: (tag, cache_cb, responder) => {
      console.log(`virtual '${prefix}':'${tag}'`);

      cache_cb.call({}, responder);
    },
  };
};

const createCache = prefix => {
  if (process.env.NODE_ENV === 'production') {
    return createRealCache(prefix);
  } else {
    return createVirtualCache(prefix);
  }
};

const jsonResponder = (req, res, next) => (err, data) => {
  if (err) {
    next(err);
  } else {
    res.json(data);
    next();
  }
};

module.exports = { createCache, jsonResponder, mkdir };
