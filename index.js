const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/questions')
const Shape = require('./lib/shapes')

function generatelogo(data){
    const {text,textColor,shape,shapeColor} = data
    const userShape = new Shape(text,textColor,shape,shapeColor)
    console.log(userShape)
}

function init(){
    inquirer.prompt(questions)
    .then((answers) => {
        fs.writeFile('./examples/logo.svg', generatelogo(answers), (error) => console.log(error))
    })
    .catch((error) => console.log(error))
}

init()