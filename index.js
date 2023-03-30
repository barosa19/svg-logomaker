const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/questions')

function init(){
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
    })
    .catch((error) => console.log(error))
}

init()