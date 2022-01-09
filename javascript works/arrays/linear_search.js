var arr=[10,20,15,30]
var element=10;
var flag=0;
for(let num of arr){
    if(element==num){
        flag=1;
        break
    }
}
console.log(flag==0?"not found":"found");