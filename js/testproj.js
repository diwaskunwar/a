(function () {
    $("h1").css({
        "font-family": "Times New Roman, Times, serif",
        "    text-transform": "uppercase",
        "font-size": "50px",
        "padding-top": "50px",
        "    padding-bottom": "50px",

    });
    $("body").css({
        "color": " white",
        "background": "black",
        "text-align": "center"
    });
    $("#form").css(
        "font-family", "Courier New, Courier",
    );
});

$(function () {
            $("#checkbox").change(function () {

                var isChecked = $(this).is(":checked");
                if (isChecked) {
                    $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
                } else {
                    $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
                }
            });
            $("#selection").change(function () {
                var selectedOption = $(this).find(":selected").text();
                alert(selectedOption)
            });

            // });
            // $("#title").html(alert());
            // $("#title").alert(html());
            // $("#title").alert();
            // alert($("#title").html());
            // $("#title").hover(function(){
            //     $("#title").css("color", "red"); 
            //     $("#title").css("color", "black");
            //   })


            //   $("#title").hover(function(){$("#enter").css("color", "red");
            // },
            // function(){
            //     $("#exit").css("color", "black");
            // })

            // $("#title").hover(enter(){
            //     $("#title").css("color", "red");}, 
            //   exit(){
            //     $("#title").css("color", "black");
            //   })

            //   $("#title").hover(function(){
            //     $("#title").css("color", "red");
            //   }, 
            //   function(){
            //     $("#title").css("color", "black");
            //   })

            // require(['css/testproj.css'],function fun(){
            //     alert("hello");``
            // })



            // // $( function(){
            // //     $("#btn-click").click(function(){
            // //         alert("button is clicked")
            // //     })
            // // })
            $(function () {
                $("#form").submit(function () {
                    var name = $("#name").val();
                    var password = $("#password").val();
                    var message = $("#message").val();
                    var checkbox = $("#checkbox").is(":checked");

                    validateNameField(name, event);
                    validatePasswordField(password, event);
                    validateMessageField(message, event);
                    validateCheckboxField(isChecked, event);
                });
            });

            function validateNameField(name, event) {
                if (!isValidName(name)) {
                    $("#name-feedback").text("please enter at least two character");
                    event.preventDefault();
                } else {
                    $("#name-feedback").text("");

                }
            }

            function validatePasswordField(password, event) {
                if (!isValidPassword(password)) {
                    $("#password-feedback").text("please enter at least seven character for message ");
                    event.preventDefault();
                } else {
                    $("#password-feedback").text("");

                }
            }

            function validateMessageField(message, event) {
                if (!isValidMessage(message)) {
                    $("#message-feedback").text("please enter a message");
                    event.preventDefault();
                } else {
                    $("#message-feedback").text("");

                }
            }

            function validateCheckboxField(isChecked, event) {
                if (!isChecked) {
                    $("#checkbox-feedback").text("please agree by checking");
                    event.preventDefault();
                } else {
                    $("#checkbox-feedback").text("");

                }
            }

            function isValidName(name) {
                return name.length >= 2;
            }


            function isValidPassword(password) {
                return password.length >= 7 && /.*[0-9].*/.test(password);
            }

            function isValidMessage(message) {
                return message.trim() != "   ";
            }
            (function () {
                $("#form").change(function (event) {

                    var textarea = $("#message");
                    if (textarea.val().trim() = "") {
                        textarea.css("box-shadow", "0 0 4px #181");
                        event.preventDefault();
                        alert("form submit success")
                    } else {
alert("canceled")
                    }
                });
            })
        })