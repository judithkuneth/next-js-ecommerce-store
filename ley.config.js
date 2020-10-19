//this file was created during the process of deploying this app to heroku. See Configure you Application Step 6: "Create a configuration file for Ley called ley.config.js.." DONE

//..which imports and runs the function from step 2". TO DO

//Step 7: Configure SSL database connections in ley.config.js:
const options = {};

if (process.env.NODE_ENV === 'production') {
  options.ssl = { rejectUnauthorized: false };
}

module.exports = options;
