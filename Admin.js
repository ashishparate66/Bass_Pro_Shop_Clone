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
        },0);
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
    ft_btn_fish();
    // add_button_fish();
    // deleteProduct_fish();
    // update_Product_fish();
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
    ft_btn_boat();
    // add_button_boat();
    // deleteProduct_boat();
    // update_Product_boat();
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
    // ft_btn_shoot();
    // add_button_shoot();
    // deleteProduct_shoot();
    // update_Product_shoot();
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
  
function ft_btn_fish() {
    let ft_btn_fish = document.querySelector("#ft_btn_fish");

    ft_btn_fish.addEventListener("click", (e) => {
      Rightbox.style.background = "white";
      Rightbox.innerHTML = "";

    Rightbox.innerHTML = `
    <div id="loading" style=" background-color:white; height:6100px;" >
        <p>Please wait page is loading ...</p>
    </div>
  `;
  
      FetchProduct_fish();
      Rightbox.style.background = "White";
    });   
}

Rightbox = document.getElementById("Right")

async function FetchProduct_fish(){
    try {
        let res = await fetch(
            "https://6398195577359127a04715b0.mockapi.io/products", 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (res.ok == true) {
            let data = await res.json();
            DisplayProduct_fish(data);
          }
    } catch {
        console.log("Failed to fetch Product");
    }
}

function DisplayProduct_fish(data) {
    Rightbox.innerHTML = "";
    Rightbox.innerHTML = `
        <div id="Cards">
            ${data
                .map((el) => {
                    return `<div Class="SmallCards">
                        <img src="${el.img}" alt="Error">
                              <h5>${el.title}</h5>
                              <h6>${el.brand}</h6>
                              <p>${el.rating}</p>
                              <p>${el.description.substring(0,50)}</p>
                              <h5>Rs. ${el.price}</h5>
                            </div>`;
                    })
                    .join(" ")} 
          </div> `;
}



function ft_btn_boat() {
  let ft_btn_boat = document.querySelector("#ft_btn_boat");

  ft_btn_boat.addEventListener("click", (e) => {
    Rightbox.style.background = "white";
    Rightbox.innerHTML = "";

  Rightbox.innerHTML = `
  <div id="loading" style=" background-color:white; height:6100px;" >
      <p>Please wait page is loading ...</p>
  </div>
`;

    FetchProduct_boat();
    Rightbox.style.background = "White";
  });   
}

async function FetchProduct_boat(){
  try {
      let res = await fetch(
          "https://6398195577359127a04715b0.mockapi.io/boating", 
          {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              },
          }
      );
      if (res.ok == true) {
          let data = await res.json();
          DisplayProduct_boat(data);
        }
  } catch {
      console.log("Failed to fetch Product");
  }
}

function DisplayProduct_boat(data) {
  Rightbox.innerHTML = "";
  Rightbox.innerHTML = `
      <div id="Cards">
          ${data
              .map((el) => {
                  return `<div Class="SmallCards">
                    <img src="${el.img}" alt="Error">
                    <h5>${el.title}</h5>
                    <h6>${el.brand}</h6>
                    <p>${el.rating}</p>
                    <p>${el.description.substring(0,50)}</p>
                    <h5>Rs. ${el.price}</h5>
                          </div>`;
                  })
                  .join(" ")} 
        </div> `;
}

//User Details

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

function InsideUserBtn() {
  leftbox.innerHTML = `
    <div id="Container_1">
      <button id="Back"><</button>
      <button id="regis_btn">Register User</button>
      <button id="user_btn">Login User</button>
  `;
  recent();
  UserRegister();
  UserLogin();
}

function UserRegister() {
  document.getElementById("regis_btn").addEventListener("click", () => {
    Rightbox.style.background="linear-gradient(to left, rgb(120 139 109), rgb(231, 170, 231))"
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
      <div id="loading">
        <p>Please wait page is loading ...</p>
      </div>
    `;
    setTimeout(() => {
      document.querySelector("#Right").innerHTML = "";
      tableStructure();
    }, 1000);
  });
}

function tableStructure() {
  document.querySelector("#Left").innerHTML = `
  <div id="Container">
      <button id="Back"><</button>
  </div>
  <div class="wel_1">
      <h1>Register Details</h1>
  </div>
`;
  document.querySelector("#Right").innerHTML = `
  <h2 id="head_regDetails">Register User Details</h2>
        <table>
              <thead id="head">
                    <tr class="navRow">
                        <td class="details">Id</td>
                        <td class="details">Username</td>
                        <td class="details">Mobile</td>
                        <td class="details">Email Id</td>
                        <td class="details">Password</td>
                    </tr>
              </thead>
              <tbody id="mainContainer_tb">
                   
              </tbody>
          </table>
  `;
  recent_1();
  Register();
}

function recent_1() {
  let back_button = document.querySelector("#Back");
  back_button.addEventListener("click", () => {
    InsideUserBtn();
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
          <div class="wel">
            <h1> Admin Dashboard ! </h1>
          </div>
    `;
  });
}

async function Register() {
  try {
    let res = await fetch(
      "https://voilent-market-api-vaibhav.onrender.com/users",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      let data = await res.json();
      tableStruc(data);
    }
  } catch (error) {
    alert("Problem in Fetching");
  }
}

function tableStruc(data) {
  tableStructu(data);
}

function tableStructu(data) {
  document.querySelector("#mainContainer_tb").innerHTML = `
        ${data
          .map((el) => {
            return `<tr class="navRow">
                      <td class="details">${el.id}</td>
                      <td class="details">${el.username}</td>
                      <td class="details">${el.mobileNo}</td>
                      <td class="details">${el.email}</td>
                      <td class="details">${el.password}</td>
                  </tr>`;
          })
          .join(" ")}
  </tr>
  `;
}

function UserLogin() {(251, 243, 244)
  document.getElementById("user_btn").addEventListener("click", () => {
    Rightbox.style.background="linear-gradient(to left, rgb(120 139 109), rgb(231, 170, 231))"
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
      <div id="loading">
        <p>Please wait page is loading ...</p>
     </div>
    `;
    setTimeout(() => {
      document.querySelector("#Right").innerHTML = "";
      tableStructure_lo();
    }, 1000);
  });
}

function tableStructure_lo() {
  document.querySelector("#Left").innerHTML = `
  <div id="Container">
      <button id="Back"><</button>
  </div>
  <div class="wel_1">
      <h1>Login Details</h1>
  </div>
`;
  document.querySelector("#Right").innerHTML = `
  <h2 id="head_regDetails">Login User Details</h2>
        <table>
              <thead id="head">
                    <tr class="navRow">
                        <td class="details_1">Id</td>
                        <td class="details_1">Username</td>
                        <td class="details_1">Password</td>
                    </tr>
              </thead>
              <tbody id="mainContainer_tc">
                   
              </tbody>
          </table>
  `;
  recent_1();
  login_1();
}

async function login_1() {
  try {
    let res = await fetch(
      "https://6398172cfe03352a94c47ae1.mockapi.io/login_user",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      let data = await res.json();
      tableStruc_1(data);
    }
  } catch (error) {
    alert("Problem in Fetching");
  }
}

function tableStruc_1(data) {
  tableStructu_1(data);
}

function tableStructu_1(data) {
  document.querySelector("#mainContainer_tc").innerHTML = `
        ${data
          .map((el) => {
            return `<tr class="navRow">
                      <td class="details_1">${el.id}</td>
                      <td class="details_1">${el.Username}</td>
                      <td class="details_1">${el.Password}</td>
                  </tr>`;
          })
          .join(" ")}
  </tr>
  `;
}



























