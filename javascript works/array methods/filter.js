// var arr=[2,3,4,5,6,7,8]
// var evens=arr.filter(num=>num%2==0)
// console.log(evens);


// var  names=["benjo","ashique","navin","Akshay"]
// var anames=names.filter(name=>name[0]=="a" || name[0]=="A")
// console.log(anames);

var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",24000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]
// 1.list mobile name samsung details
 
// var samsung_mobile=mobiles.filter(mobile=>mobile[1]=="samsung").map(mobile=>mobile[2])
// console.log(samsung_mobile);

// 2.print all mobiles under 25000

// var below_price=mobiles.filter(mobile=>mobile[3]<=25000).map(mobile=>[mobile[2],mobile[3]]);
// console.log(below_price);

// 3.print mobile details available in prce range 25k-30k


// var price_range=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000);
// console.log(price_range);


// 4.list all 5g mobile name

// var  mobile_five_G = mobiles.filter(mob=>mob[6] =="5G").map(mob=>mob[2])
// console.log(mobile_five_G);
// 5.list all 5g mobile available under 25000

// var amob=mobiles.filter(mob=>mob[6]=="5G" && mob[3]<=25000).map(mob=>mob[2])

// console.log(amob);

// 6. list all samsung mobiles names whose band=4g and display type =amoled


var samsung_mob=mobiles.filter(mob=>mob[1]=="samsung" &&  mob[5]=="AMOLED" && mob[6]=="4g").map(mob=>mob[2])

console.log(samsung_mob);



