    // extraction of elements 
    
    const usernameEle = document.getElementById("user");
        const passEle = document.getElementById("password");
        const errorELe = document   .getElementById("error");
        const buttEle = document.getElementById("btn");
        const themeCloseEle = document.getElementById("theme_close_button");
        const blankEle = document.getElementById("blank_username");
        const blankPasswordEle = document.getElementById("blank_password");
        const correctCaptachEle = "pedeho";

        blankEle.style.display = "none";
        blankPasswordEle.style.display = "none";
         usernameEle.addEventListener("input",(event)=>{
            if(usernameEle.value == ""){
          
                blankEle.style.display = "block";
                usernameEle.style.borderColor = "red";
            }
            else{
                blankEle.style.display = "none"
                 usernameEle.style.borderColor = "green";
            }

        });
    passEle.addEventListener("input", () => {
    if(passEle.value === ""){
        passEle.style.borderColor = "red";
        blankPasswordEle.style.display = "block";
    } else {
        passEle.style.borderColor = "green";
        blankPasswordEle.style.display = "none";
    }
});

        function login(){
            if(usernameEle.value === "" && passEle.value === ""){
                blankEle.style.display = "block";
                blankPasswordEle.style.display ="block";
                usernameEle.style.borderColor = "red";
                passEle.style.borderColor = "red";
            }

            else{
                blankEle.style.display = "none";
                blankPasswordEle.style.display = "none";
                usernameEle.style.borderColor = "green";
                passEle.style.borderColor = "green";
            }
            if(usernameEle.value === ""){
                blankEle.style.display = "block";
                usernameEle.style.borderColor = "red";
            }
            else{
                blankEle.style.display ="none";
                usernameEle.style.borderColor = "green";
            }
            if(passEle.value === ""){
                blankPasswordEle.style.display = "block";
                passEle.style.borderColor = "red";
            }
            else{
                blankPasswordEle.style.display = "none";
                passEle.style.borderColor = "green";
            }
            if(usernameEle.value === "2510030020" && passEle.value === "2510030020" && errorELe.value === correctCaptachEle ){
                usernameEle.style.borderRadius = "10px";
                window.location.href = "main.html"; 

            }
            else{
                usernameEle.style.borderColor = "red";
                passEle.style.borderColor = "red";      

            }
        }
        
