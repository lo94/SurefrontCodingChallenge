const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yjc5oi',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
	baseUrl: "https://www.supersurvey.com/",
	chromeWebSecurity: false,
	experimentalModifyObstructiveThirdPartyCode: true
  },
});
