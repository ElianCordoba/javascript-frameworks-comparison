let env = require('dotenv').config().parsed;

if (env.ENV !== 'local') {
  env = { ...env, ...process.env }
}

module.exports = {
  env
};
