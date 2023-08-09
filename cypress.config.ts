const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // solo necesitas agregar estas dos propiedades, no incluir este comentario
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    // e2e testing node events setup code
    config.defaultCommandTimeout= 10000;
    config.responseTimeout= 20000;
    config.pageLoadTimeout= 60000;
    return config;
  },
});
