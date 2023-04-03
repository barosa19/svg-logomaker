const { Circle, Triangle, Square } = require('./shapes')

describe('Validate', () => {
    it('should return a string for an SVG Circle', () => {
        const shape = new Circle("Hey", "Black", "Circle", "Red");
        expect(shape.render()).toEqual(`<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <circle cx="250" cy="250" r="220" fill="Red" />

        <text x="260" y="300" font-size="180" text-anchor="middle" fill="Black">Hey</text>

        </svg>`);
    })

    it('should return a string for an SVG Triangle', () => {
        const shape = new Triangle("Hey", "Black", "Triangle", "Red");
        expect(shape.render()).toEqual(`<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <polygon points="250,50 50,450 450,450" style="fill:Red" />

        <text x="250" y="350" font-size="100" text-anchor="middle" fill="Black">Hey</text>

        </svg>`);
    })

    it('should return a string for an SVG Square', () => {
        const shape = new Square("Hey", "Black", "Square", "Red");
        expect(shape.render()).toEqual(`<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <rect x="50" y="50" width="400" height="400" style="fill:Red" />

        <text x="250" y="300" font-size="180" text-anchor="middle" fill="Black">Hey</text>

        </svg>`);
    })

})