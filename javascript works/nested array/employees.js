var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

// print all employee name
// for(let employee of employees){
//     console.log(employee[1]);
// }


// print developer details
// for(let employee of employees){
//     if(employee[3]=="developer")
//     console.log(employee);

// }


// print experience of each employee

// for(let employee of employees){
 
//         console.log(employee[5]-employee[4]);
        
//     }


// print employee details whose experience>180

// var exp=0
// for(let employee of employees){
//     if(employee[5]-employee[4]>10){
//     console.log(employee);
//     }


// }


// print  highest salary
// max_salary=0
// for(let employee of employees){
//     if(employee[2]>max_salary){
//         max_salary=employee[2];
        

//     }
// }
// console.log(max_salary);


// print highest second salary



// total no of employee

// length=0;
// for (employee of employees){
//    length++
// }
// console.log(length);


// employee name start with A


// var name="a"
// for(let employee of employees){
//     if(employee[2]==name){
    
        
        
//     }
// }
// console.log(employee);

//highest salary amoung developers
// max_salary=0;
// for(employee of employees){
//     if(employee[3]=="developer" && employee[2]>max_salary ){
        


      
// }
// }
// console.log(max_salary);



// highest second salary


// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2]);



// minimum salary

// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2]);
// console.log(employees[employees.length-1][2]);

// employee length
// employees.sort((e1,e2)=>e2[2]-e1[2])
// // console.log(employees[1][2]);
// // console.log(employees[employees.length-1][2]);
// console.log(employees.length);

// highest employee salary amoung developers

// var developer_details=[]
// for(let employee of employees){
//     if(employee[3]=="developer"){
//         developer_details.push(employee)
//     }
// }
// developer_details.sort((d1,d2)=>d2[2]-d1[2])
// console.log(developer_details[0][2]);


// print employees name start with a

// for(let employee of employees){
//     if(employee[1][0]=="A"|| employee[1][0]=="a"){
//         console.log(employee);
//     }
    
// }
//  work from 2010-2015


for(let employee of employees){
    if(employee[4]>=2010 && employee[5]<=2015){
        console.log("here");
        console.log(employee);
    }


}

