const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
   retries: {
      openMode: 0,
      runMode: 1
    },
  e2e: {
    env: {
      BASE_URL_PADRAO: process.env.BASE_URL_PADRAO
    },
    reporter: "cypress-mochawesome-reporter",
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
