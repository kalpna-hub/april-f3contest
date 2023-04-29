const name1 = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const confirmPass = document.getElementById("confirm-pass");
const signUp = document.getElementById("signupBtn");
const msg = document.getElementById("msg");




signUp.addEventListener("click", getData);
function getData() {
     if(name1.value =='' || email.value=='' || pass.value=='')
     {
        msg.innerHTML = '<p style="color:red;">All fields are mandatory</p>'
        
     }
     else if(pass.value !== confirmPass.value){
        msg.innerHTML = '<p style="color:red;">Password did not match</p>';
     }
     else {
        msg.innerHTML = '<p style="color: green;">SuccessFully Signup</p>';
     
       let userData = {
            name : name1.value,
            email : email.value,
            pass : pass.value,
            token : generateToken()
        }



        localStorage.setItem("user", JSON.stringify(userData));
        window.location.href = "./home.html";
    }
}


function generateToken() {
    let generatedToken = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 16; i++) {
      generatedToken += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return generatedToken;
  }

