class Shape {
    constructor(text,textColor,shape,shapeColor){
        this.text = text,
        this.textColor = textColor,
        this.shape = shape,
        this.shapeColor = shapeColor
    }
    render(){
        throw new Error ('This render function should be overwritten by the children classe of Shape')
    }

}

class Circle extends Shape {
    constructor(text,textColor,shape,shapeColor){
    super(text,textColor,shape,shapeColor)
    }
    render(){
        console.log("It's a circle")
    }
}

class Triangle extends Shape {
    constructor(text,textColor,shape,shapeColor){
    super(text,textColor,shape,shapeColor)
    }
    render(){
        console.log("It's a Triangle")
    }
}

class Square extends Shape {
    constructor(text,textColor,shape,shapeColor){
    super(text,textColor,shape,shapeColor)
    }
    render(){
        console.log("It's a Square")
    }
}



module.exports = {Circle,Triangle,Square}