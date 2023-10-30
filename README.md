# SurefrontCodingChallenge

## Installation
Run:
```
npm install 
```

NOTE:
Due to Cloudflare bot detection I was unable to test this against the requested site
The general structure and syntax should make it clear enough the general approach I take structurally and otherwise

## High Level Testing Plan

### Scope
```
This test plan covers the testing of the survey creation feature.
```

### Features to be Tested

Survey Creation and Management:
```
* Verify creation of a new survey with proper title and description
* Confirm the ability to edit and update survey details.
* Validate the creation of surveys.
* Validate the updating of previously saved surveys.
* Test survey deletion features.
* Test survey re-ordering features.
* Confirm the ability to copy, paste, and duplicate questions.
```

Question Types:
```
* Verify the addition of multiple-choice questions with different answer options.
* Test the creation of open-ended text questions for written responses.
* Confirm the functionality of rating scale questions.
* Validate the inclusion of matrix-style questions for structured data collection.
* Ensure the accuracy of logic and branching options for conditional questions.
* Test multimedia questions, where users can attach images or videos.
```

Question Validation:
```
* Check that question types and formats are validated properly.
* Test question length limits and validation messages.
```

Survey Preview and Editing:
```
* Confirm that the survey preview function accurately reflects the survey layout and questions.
* Validate editing and making changes to the survey updates the preview.
* Ensure that survey progress can be saved and continued later.
```

Survey Accessibility and Responsiveness:
```
* Ensure that surveys can be created and completed on different devices (desktop, mobile).
* Validate that surveys are accessible to respondents with disabilities.
```

Localization and Internationalization:
```
* Test the ability to create surveys in multiple languages.
* Verify that date, time, and number formats are localized as per regional settings.
```

### Testing Types
```
* Functional Testing
* Usability Testing
* Compatibility Testing
* Security Testing
```

### Test Environment
Browsers:
```
Chrome
```
Devices:
```
Desktop, mobile
```

### Tools
```
Cypress (E2E), Jira, Azure
```