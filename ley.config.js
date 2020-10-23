//this file was created during the process of deploying this app to heroku. See Configure your Application Step 6 in Cheatsheet: [https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/160-cheatsheet-deployment/]:

const extractHerokuDatabaseEnvVars = require('./extractHerokuDatabaseEnvVars');

extractHerokuDatabaseEnvVars();
const options = {};

if (process.env.NODE_ENV === 'production') {
  options.ssl = { rejectUnauthorized: false };
}

module.exports = options;
