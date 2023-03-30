class Shape {
    constructor(text,textColor,shape,shapeColor){
        this.text = text,
        this.textColor = textColor,
        this.shape = shape,
        this.shapeColor = shapeColor
    }
    render(){
        //? walk me through new Error
        throw new Error ('This render function should be overwritten by the children classe of Shape')
    }
}

class Circle extends Shape {
    constructor(text,textColor,shape,shapeColor){
    //? walk me through super and less parameters
    super(text,textColor,shape,shapeColor)
    }
    render(){
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <circle cx="250" cy="250" r="220" fill="${this.shapeColor}" />
      
        <text x="260" y="300" font-size="180" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

class Triangle extends Shape {
    constructor(text,textColor,shape,shapeColor){
    super(text,textColor,shape,shapeColor)
    }
    render(){
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <polygon points="250,50 50,450 450,450" style="fill:${this.shapeColor}" />
      
        <text x="250" y="350" font-size="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

class Square extends Shape {
    constructor(text,textColor,shape,shapeColor){
    super(text,textColor,shape,shapeColor)
    }
    render(){
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <rect x="50" y="50" width="400" height="400" style="fill:${this.shapeColor}" />
      
        <text x="250" y="300" font-size="180" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}



module.exports = {Circle,Triangle,Square}