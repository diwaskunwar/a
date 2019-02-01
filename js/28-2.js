"use strict";

const ADD_NOTE = "This is your note";
const LOGIN={isLoggedin:false};
const USER={name:"Default",
            note:"Login First"};
var addYourNote = {type : ADD_NOTE};
let a = login=()=> {
    //let status = {isLoggedin : true};
    LOGIN.isLoggedin=true;
    //console.log(status.isLoggedin);
    console.log("LOGIN FUnction.")

//    return status.isLoggedin;
return LOGIN;
};

let b = logout = ()=> {
    //let status ={isLoggedin: false};
    console.log("Logtout Function.")
    //console.log(status.isLoggedin);
    //return status.isLoggedin;
    LOGIN.isLoggedin=false;
    return LOGIN;
};

 addNoteText=()=> {
    switch(LOGIN.isLoggedin) {
        case true:
        return addYourNote;
        break;

        case false:
        // console.log("Not login");
        return {type:"Not logged in."};
        break;

        default:
        return {type:"Not logged in."};
    }
}

noteTextList  = obj => {
    //let note = document.getElementById("note").value;
    switch(obj.type){
        case ADD_NOTE:
        document.write("Dear "+USER.name + "<br/>");
            document.write("Your note is: " +USER.note + "<br/>");
        //return yourNote;
        break;

        default:
            document.write("Dear "+USER.name + "<br/>");

            document.write("Not logged in.");


        //return "Not logged in.";
    }

}

let userNote = ()=>{
    //var loginStatus = true;
    //let name = document.getElementById("name").value;
    USER.name = document.getElementById("name").value;

    USER.note = document.getElementById("note").value;
    //let apple = addNoteText();
    return noteTextList(addNoteText());
 
    // if (loginStatus == true && apple.type == ADD_NOTE) {
    //     // console.log(123)
    //     // debugger;
    //     // loginStatus = true;        
    //     // if (apple.type == ADD_NOTE) {
    //         console.log(1);    
    //         debugger;                
    //         document.write("Dear "+name + "<br/>");
    //         document.write("Your note is: " +note + "<br/>");    
    //     }else {
    //         console.log(2);
    //         debugger;
    //         document.write("Not logged in.");
    //     }            
    
    // else if (b()){
    //     console.log(456)
    //     debugger;
    //     loginStatus = false;
    //     document.write("Not logged in.");
    // }




    // var name = document.getElementById("name").value;
    // var note = document.getElementById("note").value;
    // var apple = addNoteText(loginStatus);
    // var ball = noteTextList(note, apple);
    // if (apple.type == ADD_NOTE) {
    //         // console.log(1);    
    //         debugger;                
    //         document.write("Dear "+name + "<br/>");
    //         document.write("Your note is: " +note + "<br/>");    
    // } else {
    //     console.log(2);
    //     debugger;
    //     document.write("Not logged in.");
    // }

    // var name = document.getElementById("name").value;
    // var note = document.getElementById("note").value;
    // document.write("Dear "+name + "<br/>");
    // document.write("Your note is: " +note + "<br/>");        //it works for displaying only
};
function myButton(){
    location.reload();
}
