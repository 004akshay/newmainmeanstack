var num=345;
sum=0;
var res=""; 

 
while(num!=0){
    let res=num%10;
    sum=sum+res**3;
    num=Math.floor(num/10)
 
}
console.log(sum);   