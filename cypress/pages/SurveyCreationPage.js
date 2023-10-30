import BasePage from './BasePage';
import AddQuestionModal from './Modal/AddQuestionModal';

const addQuestionModal = new AddQuestionModal();

class SurveyCreationPage extends BasePage {	
	constructor() {
		super();
		this.addQuestionButton = 'div#quiz-add-q';
		this.questionContainer = 'div.quiz-qi';
		this.questionInput = 'input.qi-txt';
		this.answerInput = 'input.quiz-opt-txt';
		this.previewButton = 'div.quiz-pvw';
		this.createSurveyButton = 'div.quiz-save';
		this.quizSavedElement = 'div#quiz-saved';
	}
	
	visit() {
		super.visit('/');
	}
	
	/**
	* @param question {string}
	* @param answers {string[]}
	*/
	addMultipleChoiceQuestion(question, answers) {
		this.clickElement(this.addQuestionButton);
		addQuestionModal.selectQuestionType('Multiple Choice');
		cy.get(this.questionContainer).last().find(this.questionInput).type(question);
		answers.forEach((answer) => {
			cy.get(this.questionContainer).last().find(this.answerInput).last().type(answer);
		});
	}
	
	clickPreviewButton() {
		this.clickElement(this.previewButton);
	}
	
	clickCreateSurveyButton() {
		this.clickElement(this.createSurveyButton);
	}
	
	validateSurveySaved() {
		this.assertElementVisible(this.quizSavedElement);
	}
}

export default SurveyCreationPage;