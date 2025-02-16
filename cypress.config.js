const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      defaultCommandTimeout: 9100
    },
    baseUrl: '',
    viewportWidth:1280,
    viewportHeight:720
  },
});
