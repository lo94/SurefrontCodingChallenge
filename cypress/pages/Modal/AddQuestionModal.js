import BaseModal from './BaseModal';

class AddQuestionModal extends BaseModal {
	constructor() {
		super('div#qsetwin');
		this.questionTypeSelector = 'div.tdrop-name';
	}
	
	/**
	* @param type {string}
	*/
	selectQuestionType(type) {
		this.getRoot().find(this.questionTypeSelector).contains(type).click();
	}
}

export default AddQuestionModal;