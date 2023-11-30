# SkillDynamics

1. Install NodeJS
2. Install Visual Studo Code
3. 
(a) Create an empty folder - CypressSkillDynamics
	C:\Users\imchk\CypressSkillDynamics
(b) In Visual Studio, open the the folder 
(c) In the command prompt : type in 
npm init    // to create package.json
npm  install --save-dev cypress@13.6.0       // to install cypress
npm install -g npx               // to simplfly command of ../node.
npx open cypress		// to create e2e folder and config.js file
(d) install some extention from the app
- Material Icon Theme
- Prettier - Code formatter
- Cucumber (Gherkin) Full Support

(e) more dependencies
npm install --save-dev @badeball/cypress-cucumber-preprocessor
npm install --save-dev @cypress/webpack-preprocessor
(optional)  npm install --save-dev @babel/core @babel/preset-env babel-loader webpack

(f) change the cypress.config.js
=> copy it from https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/examples/webpack-cjs/cypress.config.js

1. Feature file is under e2e
2a. support/step_definitions
2b. support/page_objects
