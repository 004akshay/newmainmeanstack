var employee={

    eid:1000,
    ename:"amal",
    salary:25000,
    desig:"developer",
}
// console.log(employee.desig);
// employee.exp=2
// console.log(employee);
if("exp" in employee){
    employee.exp+=1

}
else{
    employee.exp=1;

}
console.log(employee);