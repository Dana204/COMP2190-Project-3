window.onload = function validateEntry(){

    // var btn = document.getElementById("submit");
    var valid_code = /^\d{4}$/;
    var valid_discipline = /^[A-Za-z]{4}$/;
    
    // var error = "";

    // btn.onclick = function(){

        // VARIABLES
        var code = document.getElementById("code").value;
        var title = document.getElementById("title").value;
        var discipline = document.getElementById("discipline").value;
        var level = document.getElementById("level").value;
        var credits = document.getElementById("credits").value;
        var semester = document.getElementById("semester").value;
        var opt = document.getElementById("opt").value;

        // var valid_code = /^\d{4}$/;
        // var valid_discipline = /^[A-Za-z]{4}$/;
        
        

        // CODE
        if (code == '') {
            // window.alert("Incorrect format for Course Code");
            error+= "<p> Enter your first name. </p>";
            document.getElementById('code').className = "invalid";
        }else if (code.match(valid_code)){
            document.getElementById('code').className = "valid";
        }

        // TITLE
        if (title == '') {
            alert("Complete Title Field");
            document.getElementById("title").className = "invalid";
        }else{
            document.getElementById("title").className = "valid";
        }

        // DISCIPLINE
        if (discipline == '') {
            alert("Incorrect format for Discipline eg. COMP");
            document.getElementById("discipline").className = "invalid";
        }else if (discipline.test(valid_discipline) == false){
            document.getElementById("discipline").className = "valid";
        }

        // LEVEL
        if (level != '2') {
            alert("Incorrect entry for Level");
            document.getElementById("level").className = "invalid";
        }else {
            document.getElementById("level").className = "valid";
        }

        // CREDITS
        if (credits == '') {
            alert("Incorrect entry for Credits");
            document.getElementById("error").innerHTML = "Incorrect entry for Credits"
            document.getElementById("credits").className = "invalid";
        }else if (credits >0 && level <= 8){
            document.getElementById("credits").className = "valid";
        }

        // SEMESTER
        if (semester == '') {
            alert("Incorrect entry for Semester");
            document.getElementById("semester").className = "invalid";
        }else if (level >0 && level <= 3){
            document.getElementById("semester").className = "valid";
        }

        // OPTION
        if (opt == '0') {
            document.getElementById("opt").className = "invalid";
        }else {
            document.getElementById("opt").className = "valid";
        }
        

    // };


}


    

