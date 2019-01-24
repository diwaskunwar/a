var a = { 'type': 'false' };
var b = { 'type': 'false' };

const login = () => {
    b.type = true;
    b.text = "The value type of a is ";
    //  document.write =b['type']  ;
    console.log(b['type']);
    return b;

}
const logout = () => {
    b.type = false;
    b.text = "The value type of b is ";

    return b;
}
function xyz(C, D) {
    switch (D.type) {
        case true:
            C.type = true;
            C.msg = b.text;
            document.write(a.msg + a.type)

            break;
        case false:
            C.type = false
            C.msg = b.text;
            document.write(b.msg + b.type)
            break;
        default:
            C = C;
    };
    return C;
}
xyz(b, logout());
// document.write(a.msg + a.type)
// document.getElementById("firstvalue").innerHTML = "the valur of b is "+ b.type;