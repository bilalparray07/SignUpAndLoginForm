
let loginEmail = document.getElementById('loginEmailInput');
let loginPass = document.getElementById('loginPassInput');
let loginBtn = document.getElementById('loginBtn');

   let name  =          localStorage.getItem('name');
   let email =          localStorage.getItem('email');
   let pass =          localStorage.getItem('pass');

 console.log(name,email,pass);
    
loginBtn.addEventListener('click', () => {
    

  console.log(loginEmail.value,loginPass.value);

  if (loginEmail.value==email&&loginPass.value==pass) {
    location = "/logedin.html"
  }else{
    loginEmail.classList.add("border-danger");
    loginPass.classList.add("border-danger");

  }

})
