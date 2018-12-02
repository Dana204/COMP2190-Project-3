window.onload = function validateEntry(){

    var btn = document.getElementById("submit");

    btn.onclick = function(){

        // VARIABLES
        var code = document.getElementById("code").value;
        var title = document.getElementById("title").value;
        var discipline = document.getElementById("discipline").value;
        var level = document.getElementById("level").value;
        var credits = document.getElementById("credits").value;
        var semester = document.getElementById("semester").value;
        var opt = document.getElementById("opt").value;
        

        // CODE
        if (code == '') {
            document.getElementById("code").className = "invalid";
        }else if (isValidCode(code)){
            document.getElementById("code").className = "valid";
        }

        // TITLE
        if (title == '') {
            alert("Complete Title Field")
            document.getElementById("title").className = "invalid";
        }else{
            document.getElementById("title").className = "valid";
        }

        // DISCIPLINE
        if (discipline == '') {
            document.getElementById("discipline").className = "invalid";
        }else if(isValidDiscipline(discipline)){
            document.getElementById("discipline").className = "valid";
        }

        // LEVEL
        if (level == '') {
            document.getElementById("level").className = "invalid";
        }else if(isValidLevel(level)){
            document.getElementById("level").className = "valid";
        }

        // CREDITS
        if (credits == '') {
            document.getElementById("credits").className = "invalid";
        }else if(isValidCredits(credits)){
            document.getElementById("credits").className = "valid";
        }

        // SEMESTER
        if (semester == '') {
            document.getElementById("semester").className = "invalid";
        }else if(isValidSemester(semester)){
            document.getElementById("semester").className = "valid";
        }

        // OPTION
        if (opt == '0') {
            document.getElementById("opt").className = "invalid";
        }else {
            document.getElementById("opt").className = "valid";
        }
        


        // FUNCTIONS

        // CODE
        function isValidCode(code) {
            var valid_code = /^\d{4}$/;
            if (code.match(valid_code)){
                // document.getElementById("code").className = "valid";
                return true;
            }else {
                code.focus();
                // document.getElementById("code").className = "invalid";
                alert("Incorrect format for Course Code");
                return false;
            }
        }
        
        // DISCIPLINE
        function isValidDiscipline(discipline) {
            var valid_discipline = /^[A-Za-z]{4}$/;
            if (discipline.match(valid_discipline) ){
                // code.focus();
                // document.getElementById("discipline").className = "valid";
                return true;
            }else {
                // code.focus();
                // document.getElementById("discipline").className = "invalid";
                alert("Incorrect format for Discipline eg. COMP");
                return false;
            }
        }

        // LEVEL
        function isValidLevel(level) {
            if (level != 2){
                // code.focus();
                // document.getElementById("level").className = "valid";
                return true;
            }else {
                code.focus();
                // document.getElementById("level").className = "invalid";
                alert("Incorrect entry for Level");
                return false;
            }
        }

        // CREDITS
        function isValidCredits(credits) {
            if (credits >0 && level <= 8){
                // code.focus();
                // document.getElementById("credits").className = "valid";
                return true;
            }else {
                // code.focus();
                // document.getElementById("credits").className = "invalid";
                alert("Incorrect entry for Credits");
                return false;
            }
        }

        // SEMESTER
        function isValidSemester(semester) {
            if (level >0 && level <= 3){
                // code.focus();
                // document.getElementById("semester").className = "valid";
                return true;
            }else {
                code.focus();
                // document.getElementById("semester").className = "invalid";
                alert("Incorrect entry for Semester");
                return false;
            }
        }
    }


}


    

