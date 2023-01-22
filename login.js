

let form = document.querySelector("form");
form.addEventListener("submit", printData);

function printData(e) {
  e.preventDefault();

  let Login_Email = document.getElementById("Login_Email").value;
  let Login_Password = document.getElementById("Login_Password").value;

  fetch("https://voilent-market-api-vaibhav.onrender.com/users")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let flag = false;
      for (let i = 0; i < res.length; i++) {
        if (
          res[i]?.email === Login_Email &&
          res[i]?.password == Login_Password
        ) {
          flag = true;
          break;
        }
      }

      if (flag === true) {
        alert("Login Successful");
        setTimeout(() => {
          window.location.href = "./index.html";
        }, 1500);
      } else {
        alert("Invalid Credential");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}


let form_cont=document.getElementById("form_cont")
document.getElementById("loginicon").addEventListener("click",(e)=>{
  e.preventDefault();

form_cont.style.display="block";

})

let closebutton=document.getElementById("closebutton")
document.getElementById("closebutton").addEventListener("click",(e)=>{
  e.preventDefault();

  form_cont.style.display="none";


})

