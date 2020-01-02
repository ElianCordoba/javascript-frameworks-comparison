let env = {};

if (process.env.ENV === 'prod') {
  env.ENV = process.env.ENV;
  env.GA_TRACKING_ID = process.env.GA_TRACKING_ID;
} else {
  env = { ...env, ...require('dotenv').config().parsed };
}

module.exports = {
  env
};
