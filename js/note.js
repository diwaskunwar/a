// const ADDNOTE ={ 'type': 'ADDNOTE' } ;
// const 

// const addNoteText = (note) => {
//   var hello = {type : ADDNOTE};
//     hello.text= hey ;
//     return hello;
// }
// console.log(addNoteText())

// //  function notesList(note=  "InitialNote",action){
// // switch(action){
// //     case action.includes(ADDNOTE):

// //     break;
// // }
//   function notesList(note=  "InitialNote",action){
// switch (action.type) {
//     case ADDNOTE:
//         break;
// default
//         case  :
// };

//   }

  var ADD_NOTE = { 'type': 'ADD NOTE' };
var action = { 'type': 'false' };

const notesList = (note) => {
  var b = {type : ADDNOTE};
    b.text = "note";
    console.log(b['type']);
    return b;
}

function notesList(notes="initial note",action) {
    switch (action.type) {
        case ADDNOTE:
            C.msg = b.text;

            break;
        case false:
            C.type = false
            C.msg = b.text;
            // document.write(b.msg + b.type)
            break;
        default:
            C = C;
    };
    return C;
}
notesList(note, action);