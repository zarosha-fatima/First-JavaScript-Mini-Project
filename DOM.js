let form = document.querySelector("#frm");
let nameInput = document.querySelector("#nameInput");
let ageInput = document.querySelector("#ageInput");
let result = document.querySelector("#result");
let button = document.querySelector("#btn");

    form.addEventListener("submit" , function(event) {
        event.preventDefault();

        let name = nameInput.value.trim();

        if(name === "") {
            result.innerText = "Please enter your name";
            return;
        }//if

        if(ageInput.value.trim() === "") {
            result.innerText = "Please enter your age";
            return;
        }//if

        let age = Number(ageInput.value);

        if(age < 18) {
            result.innerText = "You are under 18";
        } else {
            result.innerText = "Welcome, " + name + "!" + " Registration Successful."
        }//if

        nameInput.value = "";
        ageInput.value = "";
    });