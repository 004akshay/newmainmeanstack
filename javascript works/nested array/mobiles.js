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

//1.  costly mobile

// mobiles.sort((mob1,mob2)=>mob2[3]-mob1[3])
// console.log(mobiles[0]);


//2. snapdragon processor mobiles

// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon"){
//         console.log(mobile[2]);
//     }

// }



//3. print costly mobiles with processor snapdragon with 5G brand


// var new_arr=[]
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon" && mobile[6]=="5G"){
//     new_arr.push(mobile);



//     }
// }   
// new_arr.sort((m1,m2)=>m2[3]-m1[3])
// console.log(new_arr[0]);



//4. is there any mobile i can purchase less than 10k
//5. print samsung moile details