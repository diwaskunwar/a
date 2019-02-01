
        "use strict";
        const ADD_NOTE = "Add Note";
        var a = {type : ADD_NOTE};
        function addNoteText(status) {
        // console.log(status);
            switch (status.isLoggedIn) {
            case true:
            a.type = ADD_NOTE;
            return a;
            break;

            case false:
            return  {type:"Not logged in."}; 
            break;

            default:
            return {type:"Not logged in."};
            }
        }        
        function notesList(note = "Initial Note" , action) {
            console.log(action);
            switch (action.type) {
                case ADD_NOTE:                
                return note;
                break;
                default:
                return "Not logged in.";

            }
        }

        function login() {
            let status = {isLoggedIn : true};
            return status;
            
        }
        function logout() {
            let status = {isLoggedIn : false};
            return status;
        }

        console.log(notesList("AAAAA", addNoteText(logout())));





