class BaseModal {
	/**
	* @param modalSelector {string}
	*/
	constructor(modalSelector) {
		this.modalSelector = modalSelector;
		this.closeButton = 'div.win-close';
	}

	close() {
		cy.get(this.closeButton).click();
	}

	getRoot() {
		return cy.get(this.modalSelector);
	}
}

export default BaseModal;