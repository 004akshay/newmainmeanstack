var arr=[2,3,4,5,]
var sum=7;
var flag=0;
for( let i of arr){
    for(let j of arr){
        if((i+j)==sum){
            console.log(`pairs(${i},${j})`);
            flag=1;

        }
        break;
    }


}
if(flag==0){
    console.log("no pair");
}