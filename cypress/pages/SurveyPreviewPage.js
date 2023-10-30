import BasePage from './BasePage';

class SurveyPreviewPage extends BasePage {	
	constructor() {
		super();
		this.surveyTitle = 'h1.qp_title';
		this.surveyQuestion = 'div.qp_qi';
		this.surveyAnswer = 'span.qp_t';
		this.progressButton = 'input.qp_btn';
	}
	
	visit() {
		super.visit('/QPREVIEW');
	}
	
	/**
	* @param expectedTitle {string}
	*/
	validateSurveyTitle(expectedTitle) {
		this.assertTextContains(this.surveyTitle, expectedTitle);
	}
	
	/**
	* @param expectedQuestion {string}
	*/
	validateCurrentQuestion(expectedQuestion) {
		cy.get(this.surveyQuestion).filter(':visibile').should('contain', expectedQuestion);
	}
	
	/**
	* @param expectedAnswers {string[]}
	*/
	validateCurrentAnswers(expectedAnswers) {
		var i = 0;
		expectedAnswers.forEach((answer) => {
			cy.get(this.surveyAnswer).filter(':visible').eq(i).should('contain', answer);
			i++;
		});
	}
	
	clickBack() {
		cy.get(this.progressButton).contains('Back').click();
	}
	
	clickNext() {
		cy.get(this.progressButton).contains('Next').click();
	}
	
	clickFinish() {
		cy.get(this.progressButton).contains('Finish').click();
	}
}

export default SurveyPreviewPage;