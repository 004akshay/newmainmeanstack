class parent{
    bike(){
        console.log("appsion pro");
    }
}
class child extends parent{
    bike(){
        super.bike()  //calls parent class
        console.log("royal enfield");
    }
}
var ch= new child()
ch.bike()