const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      defaultCommandTimeout: 9100
    },
    baseUrl: 'https://proxima2.sisprevweb.com.br/esocial/esocial_04',
    viewportWidth:1280,
    viewportHeight:720
  },
});
