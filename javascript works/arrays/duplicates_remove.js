// var expense =[1500,2000,2500,3000,3500,3500]
// var st=new Set()
// for(let amount of expense){
//     st.add(amount)
// }
// console.log(st);


// 
// unique method
var expense =[1500,2000,2500,3000,3500,3500]
 var unique=[]
 for(let amount of expense){

    if(unique.includes(amount)){
    }
    else{
        unique.push(amount);
    }
}
console.log(unique);
 
