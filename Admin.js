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
        },500);
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

let head =  document.querySelector('#heading');
head.addEventListener("click", ()=>{
    window.location.reload();
})

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
                details()
                document.querySelector("#Right").innerHTML = "";
                document.querySelector("#Right").innerHTML = `
                    <div class="wel">
                        <h1>Tuna Pro Admin DashBoard!<a><h1>
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
    leftbox.innerHTML = `
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
        categories();
      }, 0);
      document.querySelector("#Right").innerHTML = "";
      document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> Categories Dashboard ! </h1>
            </div>
      `;
    });
  
    let UserBtn = document.querySelector("#ur_btn");
  
    UserBtn.addEventListener("click", (e) => {
      console.log("user");
      e.target.parentNode.remove();
    });
}

function categories(){
    leftbox.innerHTML = `
        <div id="Container_categories">
            <button id="Back"><</button>
            <button id="fishing">Fishing</button>
            <button id="boating">Boating</button>
            <button id="shooting">Shooting</button>
        </div>
    `
    recent();
    fishing_pro();
    boating_pro();
    shooting_pro();
}
  
function recent() {
    let back_button = document.querySelector("#Back");
    back_button.addEventListener("click", () => {
      details();
      document.querySelector("#Right").innerHTML = "";
      document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> Admin Dashboard ! </h1>
            </div>
      `;
    });
}

function fishing_pro() {
    let fishing_btn = document.querySelector("#fishing");
  
    fishing_btn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
  
      setTimeout(() => {
        fishing_pro1();
      }, 0);
      document.querySelector("#Right").innerHTML = "";
      document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> Categories Dashboard ! </h1>
            </div>
      `;
    });

}

function fishing_pro1() {
    leftbox.innerHTML = `
        <div id="Container_1">
              <button id="Back"><</button>
              <button id="ft_btn_fish">Products</button>
              <button id="ad_btn_fish">Add Product</button>
              <button id="de_btn_fish">Delete Product</button>
              <button id="up_btn_fish">Update Product</button>
        </div>
      `;
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> Fishing Dashboard ! </h1>
            </div>
      `;
    recent_categories();
    fetch_button_fish();
    add_button_fish();
    deleteProduct_fish();
    update_Product_fish();
}

function boating_pro() {
    let boating_btn = document.querySelector("#boating");
  
    boating_btn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
  
      setTimeout(() => {
        boating_pro1();
      }, 0);
      document.querySelector("#Right").innerHTML = "";
      document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> Categories Dashboard ! </h1>
            </div>
      `;
    });
    
}

function boating_pro1() {
    leftbox.innerHTML = `
        <div id="Container_1">
              <button id="Back"><</button>
              <button id="ft_btn_boat">Products</button>
              <button id="ad_btn_boat">Add Product</button>
              <button id="de_btn_boat">Delete Product</button>
              <button id="up_btn_boat">Update Product</button>
        </div>
      `;
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> Boating Dashboard ! </h1>
            </div>
      `;
    recent_categories();
    fetch_button_boat();
    add_button_boat();
    deleteProduct_boat();
    update_Product_boat();
}

function shooting_pro() {
    let shooting_btn = document.querySelector("#shooting");
  
    shooting_btn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
  
      setTimeout(() => {
        shooting_pro1();
      }, 0);
      document.querySelector("#Right").innerHTML = "";
      document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> Categories Dashboard ! </h1>
            </div>
      `;
    });
    
}

function shooting_pro1() {
    leftbox.innerHTML = `
        <div id="Container_1">
              <button id="Back"><</button>
              <button id="ft_btn_shoot">Products</button>
              <button id="ad_btn_shoot">Add Product</button>
              <button id="de_btn_shoot">Delete Product</button>
              <button id="up_btn_shoot">Update Product</button>
        </div>
      `;
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> Shooting Dashboard ! </h1>
            </div>
      `;
    recent_categories();
    fetch_button_shoot();
    add_button_shoot();
    deleteProduct_shoot();
    update_Product_shoot();
}

function recent_categories() {
    let back_button = document.querySelector("#Back");
    back_button.addEventListener("click", () => {
      categories();
      document.querySelector("#Right").innerHTML = "";
      document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> Categories Dashboard ! </h1>
            </div>
      `;
    });
}
  
//  Fetch && Pagination
  
function fetch_button_fish() {
    let fetch_btn_fish = document.querySelector("#ft_btn_fish");
  
    fetch_btn_fish.addEventListener("click", (e) => {
      Rightbox.style.background = "white";
      Rightbox.innerHTML = "";
      FetchProduct_fish();
      Rightbox.style.background = "White";
    });
}
  
let Rightbox = document.querySelector("#Right");


function DisplayProduct(data) {
    Rightdiv.innerHTML = "";
    Rightdiv.innerHTML = `
        <div id="Cards">
            ${data
                .map((el) => {
                    return `<div Class="SmallCards">
                            <img src="${el.image}" alt="Error">
                            <p>${el.id}</p>
                            <p>${el.category}</p>
                            <p>${el.title}</p>
                            <p>Rs. ${el.price}</p>
                            </div>`;
                    }).join(" ")} 
        </div> `;
}
  
function ClickFunction_1() {
    let userBtn = document.querySelector("#ur_btn");
  
    userBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
  
      setTimeout(() => {
        InsideUserBtn();
      }, 0);
  
      document.querySelector("#Right").innerHTML = "";
      document.querySelector("#Right").innerHTML = `
            <div class="wel">
              <h1> User DashBoard ! </h1>
            </div>
      `;
    });
  }






































