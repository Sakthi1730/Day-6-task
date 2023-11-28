//4.) Write a class to calculate uber price
class uber{
    constructor(from,to,distance){
        this.from = from;
        this.to = to;
        this.distance = distance;
    }
    getPrice(){
        var basePrice = 20;
        var price = 0;
        if(this.distance<5){
              price = basePrice + 30;
              return `The total fare is ${price}`;
        }
        else if(this.distance<10){
            price = basePrice + 40;
            return `The total fare is ${price}`;
        }
        else if(this.distance<15){
            price = basePrice + 50;
            return `The total fare is ${price}`;
        }
        else{
           if(this.distance>15){
            var distance1 = this.distance - 15;
            price = basePrice + 50 + (10*distance1);
            return `The total fare is ${price}`;
           }
        }
    }
}
var c1 = new uber("Erode bustand","Dmart stop",14);
console.log(c1.getPrice());