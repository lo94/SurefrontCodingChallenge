import SurveyCreationPage from "../pages/SurveyCreationPage"
import SurveyPreviewPage from "../pages/SurveyPreviewPage"
 
const surveyCreationPage = new SurveyCreationPage()
const surveyPreviewPage = new SurveyPreviewPage()  
  
describe("Testing multiple choice survey creation", () => {
   it("Create, preview and save survey", () => {
	 var question = 'Do I stay or do I go?';
	 var answers = ['Stay', 'Go'];
	 surveyCreationPage.visit();
	 surveyCreationPage.addMultipleChoiceQuestion(question, answers);
	 
	 surveyCreationPage.clickPreviewButton();
	 surveyPreviewPage.validateCurrentQuestion('Do I stay or do I go?');
	 surveyPreviewPage.validateCurrentAnswers(answers);
	 
	 cy.go('back');
	 surveyCreationPage.clickCreateSurveyButton();
	 surveyCreationPage.validateSurveySaved();
   })
})