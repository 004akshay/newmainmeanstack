// var arr=[2,3,4,5,6,7,8]
// var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);
// var sum=arr.reduce((n1,n2)=>n1+n2)
// console.log(sum);
// var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(min);


var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]
//1. find maximum cost
// var max_cost=mobiles.reduce((mob1,mob2)=>mob1[3]>mob2[3]?mob1:mob2)
// console.log(max_cost);


//2.  find low cost
// var low_cost=mobiles.reduceRight((mob1,mob2)=>mob1[3]<mob2[3]?mob1:mob2)
//or
// var low_cost=mobiles.reduce((mob1,mob2)=>mob1[3]<mob2[3]?mob1:mob2)
// console.log(low_cost);
