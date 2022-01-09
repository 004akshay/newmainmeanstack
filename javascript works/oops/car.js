var fortuner={
    manufaturer:"toyota",
    color:["white ,black"],
    price:"45lakh",
    varient:["petrol","diesel"],
    getprice(){
        return this.price
    }
}
var endavour={
    manufaturer:"ford",
    color:["white ,black"],
    price:"40lakh",
    
    
}
endavour.__proto__=fortuner;
// console.log(endavour.price);
// console.log(endavour.varient);
console.log(endavour.getprice());