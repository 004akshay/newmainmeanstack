// class student{

//     setstudent(name,age,gender,clas){
//         this.name=name;
//         this.age=age;
//         this.gender=gender
//         this.clas=clas;

//     }
//     printstudent(){
//         console.log(this.name,this.age,this.gender,this.clas);
//     }

// }
// var obj=new student()
// obj.setstudent("akhil",14,"male","9th")
// obj.printstudent()

// var obj1=new student()
// obj1.setstudent("akku",15,"male","10th")
// obj1.printstudent()


// 2.constructor


class student{

    constructor(name,age,gender,clas){
        this.name=name;
        this.age=age;
        this.gender=gender
        this.clas=clas;

    }
    printstudent(){
        console.log(this.name,this.age,this.gender,this.clas);
    }

}
var obj=new student("akhil",14,"male","9th")

obj.printstudent()

var obj1=new student("akku",15,"male","10th")

obj1.printstudent()
