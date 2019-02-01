// var a = { 'type': 'false' };
// var b = { 'type': 'false' };

// const login = () => {
//     b.type = true;
//     b.text = "The value type of a is ";
//     //  document.write =b['type']  ;
//     console.log(b['type']);
//     return b;

// }
// const logout = () => {
//     b.type = false;
//     b.text = "The value type of b is ";

//     return b;
// }
// function xyz(C, D) {
//     switch (D.type) {
//         case true:
//             C.type = true;
//             C.msg = b.text;
//             document.write(a.msg + a.type)

//             break;
//         case false:
//             C.type = false
//             C.msg = b.text;
//             document.write(b.msg + b.type)
//             break;
//         default:
//             C = C;
//     };
//     return C;
// }
// xyz(b, logout());
// // document.write(a.msg + a.type)
// // document.getElementById("firstvalue").innerHTML = "the valur of b is "+ b.type;
const ADD_NOTE = { 'type': 'ADD NOTE' };
const addNoteText = (note) => {
   var b = {} ;
    b.text = note;
 b.prop = action;
console.log(b);
}
function login(){
var action= {type: true};
return ADD_NOTE.type;
}

function logout(){
  var action = {type: false};
return action;
}
function noteList(note="initial note",action) {
switch (action.type){
case true:
console.log(`$action['type']`);
break;
case false:
console.log("action doesnot has ADD NOTE");
break;
default:
action.type = note;
console.log("INITIAL NOTE")
break;
};}
console.log(noteList(ADD_NOTE,login(note)))

