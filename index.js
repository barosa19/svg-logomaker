const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/questions')
const {Circle, Triangle, Square } = require('./lib/shapes')

function generatelogo(data) {
    const { text, textColor, shape, shapeColor } = data
    switch (shape) {
        case "Circle":
            const circleSelected = new Circle(text, textColor, shape, shapeColor)
            circleSelected.render()
            break;
        case "Triangle":
            const triangleSelected = new Triangle(text, textColor, shape, shapeColor)
            triangleSelected.render()
            break;
        case "Square":
            const squareSelected = new Square(text, textColor, shape, shapeColor)
            squareSelected.render()
            break;
        default:
            console.log('An error has occured. Please select a shape')

    }
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            fs.writeFile('./examples/logo.svg', generatelogo(answers), (error) => console.log(error))
        })
        .catch((error) => console.log(error))
}

init()