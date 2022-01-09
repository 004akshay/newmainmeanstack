var max_exp=0
var expense =[1500,2000,2500,3000,3500]
for(let amount of expense){
    if(amount>max_exp){
        max_exp=amount
    }
}
console.log("max expense",max_exp);
