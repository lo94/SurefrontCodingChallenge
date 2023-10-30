class BasePage {
  constructor() {
    
  }

  visit(url) {
    // Navigate to a specific URL
    cy.visit((url), {
		failOnStatusCode: false,
		headers: {
			"Accept": "application/json, text/plain, */*",
			"User-Agent": "axios/0.18.0"
		}
	})
  }

  // Common methods for interacting with elements
  clickElement(selector) {
    cy.get(selector).click();
  }

  typeText(selector, text) {
    cy.get(selector).type(text);
  }

  // Common assertions
  assertElementVisible(selector) {
    cy.get(selector).should('be.visible');
  }

  assertTextContains(selector, text) {
    cy.get(selector).should('contain', text);
  }
}

export default BasePage;