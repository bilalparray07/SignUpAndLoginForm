let signUpName = document.getElementById("form3Example1c");
let signUpEmail = document.getElementById("form3Example3c");
let signUpPass = document.getElementById("form3Example4c");
let signUpRepPass = document.getElementById("form3Example4cd");
let signUpBtn = document.getElementById("signUpBtn");
let nameLabel = document.getElementById("nameLabel");
let emailLabel = document.getElementById("emailLabel");
let passLabel = document.getElementById("passLabel");
let repassLabel = document.getElementById("repassLabel");
let res = /^[a-zA-Z]+$/;
res = /^[a-zA-Z\s]*$/;
var regexEmail =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

signUpBtn.addEventListener("click", () => {
    validate();
});

function validate() {
    if (signUpName.value == "") {
        nameLabel.innerHTML = `<label >Name is Empty</label>`;
        nameLabel.style.color = "red";
    } else if (signUpName.value.length < 3) {
        nameLabel.innerHTML = `<label >Name is Short</label>`;
        nameLabel.style.color = "red";
    } else if (!res.test(signUpName.value)) {
        nameLabel.innerHTML = `<label >Only letters Required</label>`;
        nameLabel.style.color = "red";
    } else {
        nameLabel.innerHTML = `<label ></label>`;
        signUpEmail.focus();
        if (signUpEmail.value == "") {
            emailLabel.innerHTML = `<label >Email is Empty</label>`;
            emailLabel.style.color = "red";
        } else if (signUpEmail.value.length < 3) {
            emailLabel.innerHTML = `<label >Email is Short</label>`;
            emailLabel.style.color = "red";
        } else if (!regexEmail.test(signUpEmail.value)) {
            emailLabel.innerHTML = `<label >Email is Invalid</label>`;
            emailLabel.style.color = "red";
        } else {
            emailLabel.innerHTML = `<label ></label>`;
            signUpPass.focus();

            if (signUpPass.value == "") {
                passLabel.innerHTML = `<label >Password is Empty</label>`;
                passLabel.style.color = "red";
            } else if (signUpPass.value.length < 8) {
                passLabel.innerHTML = `<label >Password Should be greater than 8</label>`;
                passLabel.style.color = "red";
            } else {
                passLabel.innerHTML = `<label></label>`;
                signUpRepPass.focus();
                if (signUpRepPass.value != signUpPass.value) {
                    repassLabel.innerHTML = `<label >Passwords does not match</label>`;
                    repassLabel.style.color = "red";
                } else {
                    repassLabel.innerHTML = `<label></label>`;
                    localStorage.setItem("name", signUpName.value);
                    localStorage.setItem("email", signUpEmail.value);
                    localStorage.setItem("pass", signUpPass.value);
                    console.log(localStorage.getItem('name'));
                    console.log(localStorage.getItem('email'));
                    console.log(localStorage.getItem('pass'));
                    location = "/login.html"
                }
            }
        }
    }
}

///Login Javascript from here

