const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/questions')
const {Circle, Triangle, Square } = require('./lib/shapes')

function generatelogo(shapeInfo) {
    const { text, textColor, shape, shapeColor } = shapeInfo
    //? Help me understand switch!!
    let shapeRendered;
    switch (shape) {
        case "Circle":
            const circleSelected = new Circle(text, textColor, shape, shapeColor)
            shapeRendered = circleSelected.render()
            break;
        case "Triangle":
            const triangleSelected = new Triangle(text, textColor, shape, shapeColor)
            shapeRendered = triangleSelected.render()
            break;
        case "Square":
            const squareSelected = new Square(text, textColor, shape, shapeColor)
            shapeRendered = squareSelected.render()
            break;
        //? Do I need a deafult when I have a list?
        default:
            console.log('An error has occured. Please select a shape')
    }
    //? Is this where I should console log?
    console.log('Generated logo.svg')
    return shapeRendered
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            fs.writeFile('./examples/logo.svg', generatelogo(answers), err => console.log(err))
        })
        .catch((err) => console.log(err))
}

init()