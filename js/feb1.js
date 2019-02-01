"use strict";
var savedInput = [];
let inputName = document.getElementById('name');
let inputGenre = document.getElementById('genre');
let inputRating = document.getElementById('rating');
let inputReview = document.getElementById('review');

let movieListAdder = document.getElementById('button1');
let genreFilter = document.getElementById('button2');
let ratingFilter = document.getElementById('button3');


// let myGenreSelection = document.getElementById('genreSelection');
// myGenreSelection.addEventListener("change", function(){
//     let dynamicGenreSelected = myGenreSelection.value;
//     // return dynamicGenreSelected;
//     console.log(dynamicGenreSelected);
// })

genreFilter.addEventListener("click", function() {
    var html = "<table border='1px' width='500px'    >";
    for(let i = 0; i < savedInput.length;) {
        if (savedInput[i].Genre == document.getElementById('genreSelection').value) {
            // console.log(savedInput[i].Name)
            html+="<tr>";
    html+="<td>"+savedInput[i].Name +"</td>";
    html+="<td>"+savedInput[i].Genre+"</td>";
    html+="<td>"+savedInput[i].Rating+"</td>";
    html+="<td>"+savedInput[i].Review+"</td>";
    
    html+="</tr>";               
 }
        i++;
    }
    html+="</table>";
document.getElementById("box").innerHTML = html;})

ratingFilter.addEventListener("click", function() {
var html = "<table border='1px' width='500px'    >";
  
    for (let i = 0; i < savedInput.length; ) {
        if (savedInput[i].Rating == document.getElementById('ratingSelection').value) {
            // console.log(savedInput[i].Name);
            html+="<tr>";
                html+="<td>"+savedInput[i].Name +"</td>";
    html+="<td>"+savedInput[i].Genre+"</td>";
    html+="<td>"+savedInput[i].Rating+"</td>";
    html+="<td>"+savedInput[i].Review+"</td>";
    html+="</tr>";}
        i++;
    }
    html+="</table>";
document.getElementById("box").innerHTML = html;
})

movieListAdder.addEventListener("click", function(){
    // if (!inputName.value || !inputGenre || !inputRating || !inputReview) return false;
    savedInput.push({
        Name : inputName.value, Genre: inputGenre.value,
        Rating: inputRating.value, Review: inputReview.value
    })
    console.log(savedInput);
})