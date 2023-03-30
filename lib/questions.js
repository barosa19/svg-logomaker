questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo.',
        default: 'Noo',
        validate: (text) => text.length === 3
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you wish the text to be?',
        default: 'Black'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you wish the logo to be?',
        default: 'Circle',
        choices: ['Circle','Triangle','Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you wish the shape to be?',
        default: 'Red'
    }
]

module.exports = questions