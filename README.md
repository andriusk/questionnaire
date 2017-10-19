# Simple questionnaire

## Requirements
In order to launch application on your machine you need to install few tools and applications:
* [Nodejs](https://nodejs.org/) (Mandatory!).
* [Npm](https://www.npmjs.com/) (Mandatory but by default comes with Nodejs).
* [Git](https://git-scm.com/) (Not mandatory. You can download source from GitHub).
* Chrome browser (Application was tested and developed using Chrome browser. But it should work in any modern browser such as Firefox, Edge, Safari).

## Installation
### 1. Clone Git repository
```sh
git clone https://github.com/andriusk/questionnaire.git
```
**NOTE!** Cloning Git repository is not necessary. You can download source from GutHub (https://github.com/andriusk/questionnaire).

### 2. Install dependencies
```sh
cd questionnaire
npm install
```
### 2. Compile and run application
```sh
ng serve
```
## Launching

* To open application navigate to http://localhost:4200/ with your browser.
* To add remove or edit questions, please modify mock-questions.ts file

## Tech
This applications uses a number of open source projects to work properly:
* [AngularJS](https://angular.io/) - HTML enhanced for web apps!
* [Twitter Bootstrap](http://getbootstrap.com/) - great UI boilerplate for modern web apps.
* [Webpack](https://webpack.js.org/) webpack is a module bundler for modern JavaScript applications. 
* [TypeScript](https://www.typescriptlang.org/) Supperset of JavaScript that compiles to plain JavaScript.

## Todos
* Write tests.
* Implement more field validators such as phone number, date, time, ect..
* Move all strings to constants
* Implement question data validation


