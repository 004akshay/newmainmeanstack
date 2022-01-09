var expense =[1500,2000,2500,800,3000,3500]
min_exp=expense[0];
for(let amount of expense){
    if(min_exp>amount){
        min_exp=amount;
    }
}
console.log("min exp",min_exp);