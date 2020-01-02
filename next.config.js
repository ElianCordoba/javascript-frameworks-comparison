let env = process.env;

if (env.ENV !== 'prod') {
  env = { ...env, ...require('dotenv').config().parsed };
}

module.exports = {
  env
};
