var a = { 'type': 'false' };
var b = { 'type': 'false' };

//     function login(){
//     b['type']=true;     
//     console.log(`the value type of b is ${b['type']}`)
//     return b['type']=true;
// };
// function logout(){
// b['type']=false; 
// console.log(`the value type of b is ${b['type']}`)
// return b['type']=false;
// };
const login = () => {
    b.type = true;
    b.text = "hello you are logged in";
    return b;
}
const logout = () => {
    b.type = false;
    b.text = "hello you are logged out";

    return b;
}
function xyz(C, D) {
    console.log("i am inside switch: " + D.type);
    switch (D.type) {
        case true:
            console.log("true" + D.text)
            C.type = true;
            C.msg = D.text;
            //  b['type'] =document.getElementById('firstvalue');
           // return a;
            break;
        case false:
            C.type = false
            C.msg = D.text;
            console.log("false" + D.text)
            //return a;
            break;
        default:
            C=C;
    };
    return C;
}
var c = xyz(a, logout());

console.log("value od c:  " + c.msg)