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

module.exports = Shape