"use strict";
let   prop1= new Prop ("John","001");
let   prop2= new Prop( "Von","002");
let   prop3= new Prop("Marshal","003");
let   prop4= new Prop( "Ted","004");
let   prop5= new Prop( "Barney","005");
let   prop6= new Prop( "Ted","006")
function Prop(name,id){

    this.name= name;
    this.id=id 
}
var list = [prop1,prop2,prop3,prop4,prop5,prop6];

let userName = prompt("Enter name:", );


for(let i=0; i<list.length;) {
    if(userName == list[i].name) {
    console.table("Name :" +list[i].name + " id :" +list[i].id);
}
    i++;
}
