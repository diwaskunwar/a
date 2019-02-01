var UserName; 
var Note; 
var UserName = ()=> {  
    return document.getElementById("User_name").value;
}
var Note = () =>{
    return document.getElementById("Note").value;
}
// function Answer(){
//    UserName = UserName();
//     Note = Note();
//     document.write( `DEAR ${UserName} "<br/>"`);
//     document.write(`Note : ${Note}`);
//  return Answer;   
// }
function login() {
    let status = {isLoggedIn : true};
    return status.isLoggedIn;
}
function logout() {
    let status = {isLoggedIn : false};
    return status.isLoggedIn;
}
// function log(){
//     switch(log.value){
//         case true:
//         break
//     }
// }
function check(){
    var log = document.getElementsByName("log");
    if (log[0].checked){
 return log[0];
    }
    else{
        alert("not logged in")
    }
}

function display(status) {
    switch (status.checked) {
        case true:
        UserName = UserName();
        Note = Note();
        document.write( `DEAR ${UserName} <br/>`);
        document.write(`Note : ${Note}`);
    var back = document.getElementsByName("back");
        break;
        default:
        return {type:"Not logged in."};
        }
    }        
function back(){
    history.back()
}

// console.log(display(check()),"ajfh");