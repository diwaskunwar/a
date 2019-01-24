var firstName = ["ted","barney","robin"];
var lastName =["mosby","stinsky","schbartsy"]

count =firstName.length;
var checkA=prompt("firstName u want to check");
var checkB=prompt("lastName")
for(var i=0;i<count;i++){
if(firstName.includes(checkA)){if(lastName.includes(checkB)){
console.log("you were right")
  break;
  }
}else{
console.log("wrong")
}};

