"use strict";
var MovieName;
var Genre;
var Imdb;

let prop1 = new Prop("Batman vs Superman", "Action", "5");
let prop2 = new Prop("Lost", "Adenture", "7");
let prop3 = new Prop("12 years A Slave", "History", "8");
let prop4 = new Prop("Avenger", "Action", "6");
let prop5 = new Prop("Pele", "Sports", "8");
let prop6 = new Prop("Mandela", "History", "6")

function Prop(name, genre, rating) {

    this.name = name;
    this.genre = genre;
    this.rating = rating
}

let list = [prop1, prop2, prop3, prop4, prop5, prop6];
var MovieName = () => {
    return document.getElementById("Movie_name").value;
}

let find = () => {
    MovieName = MovieName();
    var html = "<table border='1px' width='500px'   >";
    for (let i = 0; i < list.length;) {
        if (MovieName == list[i].name) {
            // alert("Name :" + list[i].name + "  Genre : " + list[i].genre + "  imdb rating :" + list[i].rating);
            html += "<tr>";
            html += "<td>" + list[i].name + "</td>";
            html += "<td>" + list[i].genre + "</td>";
            html += "<td>" + list[i].rating + "</td>";
            html += "</tr>";
        }
        i++;
    }
    html += "</table>";
    document.getElementById("box").innerHTML = html;
}
var G = () => {
    return document.getElementById("G1").value;
}
let GENRE = () => {
    Genre = G();
    var html = "<table border='1px' width='500px'    >";
    for (let i = 0; i < list.length;) {
        if (Genre == list[i].genre) {
            // alert("Name :" + list[i].name + "  Genre : " + list[i].genre + "  imdb rating :" + list[i].rating);
            html += "<tr>";
            html += "<td>" + list[i].name + "</td>";
            html += "<td>" + list[i].genre + "</td>";
            html += "<td>" + list[i].rating + "</td>";
            html += "</tr>";
        }
        i++;
    }
    html += "</table>";
    document.getElementById("box").innerHTML = html;
};
var I = () => {
    return document.getElementById("ID1").value;
}
let IMDB = () => {
    Imdb = I()
    var html = "<table border='1px' width='500px'    >";
    for (let i = 0; i < list.length;) {
        if (Imdb == list[i].rating) {
            // alert("Name :" + list[i].name + "  Genre : " + list[i].genre + "  imdb rating :" + list[i].rating);
            html += "<tr>";
            html += "<td>" + list[i].name + "</td>";
            html += "<td>" + list[i].genre + "</td>";
            html += "<td>" + list[i].rating + "</td>";

            html += "</tr>";

        }
        i++;
    }
    html += "</table>";
    document.getElementById("box").innerHTML = html;

};

// let saveData={};
// let saveData=(name,genre,rating)=>{
// // return true;
// // name = this.name;
// alert(this.name)
// }
// let movies=[];
// function saveData (){
//    this.name= document.getElementById("M1").value;
//     movies.push ({ 
// name : this.name
//     }) 
//     alert(name)
// }
