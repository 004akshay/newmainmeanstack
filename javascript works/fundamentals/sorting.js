var num1=20;
var num2=10;
var num3=30;
if((num1>num2)&&(num1>num3)){

    if(num2>num3){

        console.log( ` sort ${num1} ${num2} ${num3}`)



    }
    else{
        console.log(`sort ${num1} ${num3} ${num2}`)
        
    }
}
else if((num2>num1)&&(num2>num3)){
    if(num1>num3){
        console.log(`sort ${num2} ${num1} ${num3}`)


    }
    else{
        console.log(`sort ${num2} ${num3} ${num1}`)
        
    }
    

}
else if((num3>num1)&&(num3>num2)){
    if(num1>num2){
        console.log(`sort ${num3} ${num1} ${num2}`)


    }
    else{
        console.log(`sort ${num3} ${num2} ${num1}`)
    }
}