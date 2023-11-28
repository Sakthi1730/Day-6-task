//2.)https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class circle{
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        var rad = this.radius;
        return rad.toFixed(2);
    }
    set newRadius(modifiedRadius){
        this.radius = modifiedRadius;
    }
    getcolor(){
        return `Color of the circle is ${this.color}`;
    }
    set newcolor(modifiedcolor){
        this.color = modifiedcolor;
    }
    getArea(){
        return 3.14*this.radius*this.radius;
    }
    getCircumference(){
        return 2*3.14*this.radius;
    } 
}
var c1 = new circle(1.0,"red");
console.log(c1.getRadius());

c1.newRadius = "2.0";
console.log(c1.radius);

console.log(c1.getcolor());

c1.newcolor = "blue";
console.log(c1.color);

var StrRadius = c1.radius.toString();
console.log(typeof StrRadius);
console.log(typeof c1.color);

console.log(c1.getArea());

console.log(c1.getCircumference());




