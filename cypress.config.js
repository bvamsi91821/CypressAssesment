const { defineConfig } = require('cypress');
const cucumber = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    specPattern: 'cypress/support/signup-login.steps.js', // Use this to specify your feature file location
    supportFile: 'cypress/support/e2e.js',
    video: false, // Disable video recording
    setupNodeEvents(on, config) {
      // Add the Cucumber preprocessor plugin
      cucumber(on, config);

      return config;
    },
  },
});
