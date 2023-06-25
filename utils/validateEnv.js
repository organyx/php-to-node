const dotenv = require('dotenv-flow');
const { cleanEnv, port, str } = require('envalid');

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('Could not find .env file');
}

const validateEnv = () =>
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'staging', 'production', 'test', 'development_local'],
      devDefault: 'development_local',
      default: 'production'
    }),
    PORT: port({ default: 3010 }),
    ROOT_DOMAIN: str({ devDefault: 'localhost' }),
    LOG_LEVEL: str({ devDefault: 'info', default: 'error' }),
    MONGO_URI: str({ devDefault: 'mongodb://localhost:27017/rest-api' })
  });

module.exports = validateEnv;
