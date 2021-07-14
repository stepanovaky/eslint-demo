/* eslint-disable */

// 1. npm install eslint --save-dev

// 2. npx eslint --init
/* 
1. How would you like to use ESLint?
    To check syntax Only
    To check syntax and find problems
    To check syntax, find problems, and enforce code style 

2. What type of modules does your project use?
    JavaScript modules (import/export)
    CommonJS (require/exports)
    None of these

3. Which framework does your project use?
    React
    Vue.js
    None of these

4. Does your project use TypeScript?
    No / Yes

5. Where does your code run? ... (Press <space> to select, <a> to toggle all, <i> to invert selection)
    Browser
    Node

6. How would you like to define a style for your project?
    Use a popular style guide
    Answer questions about your style
    Inspect your JavaScript file(s)

7. ... (based on previous answer)

8. Which format do you want your config file to be in? 
    JavaScript
    YAML
    JSON

9. The config that you've selected requires the following dependencies:    

... (dependent on answers) 

Would you like to install them now with npm? 
    No / Yes
*/

// OPTIONS:
//run ESlint on a specific file:
// npx eslint yourfile.js

//CONFIGURATION:
/* 
If there are multiple configuration files in the same directory, ESLint will only use one. The priority order is as follows:

1. .eslintrc.js
2. .eslintrc.cjs
3. .eslintrc.yaml
4. .eslintrc.yml
5. .eslintrc.json
6. package.json


*/

//STYLE GUIDES:
//Airbnb: https://github.com/airbnb/javascript
//Standard: https://github.com/standard/standard
//Google: https://github.com/google/eslint-config-google
//XO: https://github.com/xojs/eslint-config-xo
