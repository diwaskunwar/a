var UserName; 
var Note; 
var UserName = ()=> {  
    return document.getElementById("User_name").value;
}
var Note = () =>{
    return document.getElementById("Note").value;
}
function func(){
    var log = document.getElementsByName("log");
    if (log[0].checked){
   UserName = UserName();
    Note = Note();
    alert( `DEAR ${UserName} <br/>`);
    alert(`Note : ${Note}`);

        console.log("logged in")
    }
    else{
        alert("not logged in")
    }
}
