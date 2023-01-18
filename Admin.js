let loginButton = document.getElementById("login_btn");

window.addEventListener("load",()=>{
    loginButton.addEventListener("click",(e)=>{
        e.target.parentNode.remove();
        document.querySelector("#Right").innerHTML = "";
        document.querySelector("#Right").innerHTML = `
            <div class="wel">
                <h1> LOGIN HERE !!!</h1>
            </div>
        `;
        setTimeout(()=>{
            loginDetails();
        },1000);
    });
});

let leftbox = document.getElementById("Left");

function loginDetails(){
    leftbox.innerHTML = `
        <div class="form">
            <label id="lab">Username</label>
            <br>
            <input id="username" type="text" placeholder="Enter Username">
            <br>
            <label id="lab">Password</label>
            <br>
            <input id="password" type="password" placeholder="Enter Password">
            <br>
            <button id="submit_btn">Login</button>
        </div>
    `;
    click();
}

function click() {
    let subButton = document.getElementById("submit_btn");

    let username = document.getElementById("username");

    let password = document.getElementById("password");

    subButton.addEventListener("click",(e)=>{
        e.preventDefault();
        data();
    });

    function data() {
        if(username.value === "admin" && password.value === "Tuna_pro"){
            console.log(username.value, password.value);
            Welcome();
            alert("Welcome to the Tuna Pro!");
            document.querySelector("#submit_btn").parentNode.remove();
            setTimeout(()=>{
                document.querySelector("#Right").innerHTML = "";
                document.querySelector("#Right").innerHTML = `
                    <div class="wel">
                        <h1> Tuna Pro Admin DashBoard!</h1>
                    </div>
                `;
            },2000);
            
        } else {
            alert("Wrong Credentials!")
        }
    }
    
}

// After Login 

function Welcome() {
    document.querySelector("#Right").innerHTML = `
        <div class="wel">
            <h1> Welcome in Admin Page ! </h1>
        </div>
    `;
}

function details() {
    leftdiv.innerHTML = `
        <div id="Container">
              <h2 id="cat">Categories</h2>
              <button id="pr_btn">Product details</button>
              <button id="ur_btn">User details</button>
        </div>
      `;
      ClickFunction();
      ClickFunction_1();
}


function ClickFunction() {
    let productBtn = document.querySelector("#pr_btn");
  
    productBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
  
      setTimeout(() => {
        InsideProductBtn();
      }, 0);
      document.querySelector("#Right").innerHTML = "";
      document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> Product DashBoard ! </h1>
            </div>
      `;
    });
  
    let UserBtn = document.querySelector("#ur_btn");
  
    UserBtn.addEventListener("click", (e) => {
      console.log("user");
      e.target.parentNode.remove();
    });
}


  
  


















