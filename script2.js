//3.)Write a person class to hold all the details
class person{
    constructor(name,age,gender,qualification){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
    }
    
        getDetails(){
            return`My name is ${this.name} I am ${this.age} old and I am graduate ${this.qualification}`;
        }
}
var p1 = new person("Sakthi","18","Male","B.E(EEE)");
console.log(p1.getDetails());