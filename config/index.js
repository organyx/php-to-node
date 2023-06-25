const validateEnv = require('./utils/validateEnv');

const env = validateEnv();

const CONFIG = {
  PORT: env.PORT,
  ROOT_DOMAIN: env.ROOT_DOMAIN,
  LOGS: {
    LEVEL: env.LOG_LEVEL
  },
  MONGO_URI: env.MONGO_URI,
  API: {
    PREFIX: '/api'
  },
  isProduction: env.isProduction
};

module.exports = CONFIG;
