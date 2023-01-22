//============================ nav bar =====================

let men = document.getElementById("btn")
let content = document.getElementById("content")
let bod = document.getElementsByTagName("body")


men.addEventListener("click", () => {
  content.style.visibility = "visible"
  content.style.display = "flex"
})

content.addEventListener("mouseleave", () => {
  content.style.visibility = "hidden"
})
bod[0].addEventListener("mouseleave", () => {
  content.style.visibility = "hidden"
})



let men1 = document.getElementById("btn1")
content1 = document.getElementById("content1")
bod = document.getElementsByTagName("body")


men1.addEventListener("click", () => {
  content1.style.visibility = "visible"
  content1.style.display = "flex"
})
content1.addEventListener("mouseleave", () => {
  content1.style.visibility = "hidden"
})
bod[0].addEventListener("mouseleave", () => {
  content1.style.visibility = "hidden"
})


let men2 = document.getElementById("btn2")
content2 = document.getElementById("content2")
bod = document.getElementsByTagName("body")


men2.addEventListener("click", () => {
  content2.style.visibility = "visible"
  content2.style.display = "flex"
})
content2.addEventListener("mouseleave", () => {
  content2.style.visibility = "hidden"
})
bod[0].addEventListener("mouseleave", () => {
  content2.style.visibility = "hidden"
})


let men3 = document.getElementById("btn3")
content3 = document.getElementById("content3")
bod = document.getElementsByTagName("body")


men3.addEventListener("click", () => {
  content3.style.visibility = "visible"
  content3.style.display = "flex"
})
content3.addEventListener("mouseleave", () => {
  content3.style.visibility = "hidden"
})
bod[0].addEventListener("mouseleave", () => {
  content3.style.visibility = "hidden"
})

let men4 = document.getElementById("btn4")
content4 = document.getElementById("content4")
bod = document.getElementsByTagName("body")


men4.addEventListener("click", () => {
  content4.style.visibility = "visible"
  content4.style.display = "flex"
})
content4.addEventListener("mouseleave", () => {
  content4.style.visibility = "hidden"
})
bod[0].addEventListener("mouseleave", () => {
  content4.style.visibility = "hidden"
})

let men5 = document.getElementById("btn5")
content5 = document.getElementById("content5")
bod = document.getElementsByTagName("body")


men5.addEventListener("click", () => {
  content5.style.visibility = "visible"
  content5.style.display = "flex"
})
content5.addEventListener("mouseleave", () => {
  content5.style.visibility = "hidden"
})
bod[0].addEventListener("mouseleave", () => {
  content5.style.visibility = "hidden"
})



let men6 = document.getElementById("btn6")
content6 = document.getElementById("content6")
bod = document.getElementsByTagName("body")


men6.addEventListener("click", () => {
  content6.style.visibility = "visible"
  content6.style.display = "flex"
})
content6.addEventListener("mouseleave", () => {
  content6.style.visibility = "hidden"
})
bod[0].addEventListener("mouseleave", () => {
  content6.style.visibility = "hidden"
})



let men7 = document.getElementById("btn7")
content7 = document.getElementById("content7")
bod = document.getElementsByTagName("body")


men7.addEventListener("click", () => {
  content7.style.visibility = "visible"
  content7.style.display = "flex"
})
content7.addEventListener("mouseleave", () => {
  content7.style.visibility = "hidden"
})
bod[0].addEventListener("mouseleave", () => {
  content7.style.visibility = "hidden"
})

let men8 = document.getElementById("btn8")
content8 = document.getElementById("content8")
bod = document.getElementsByTagName("body")


men8.addEventListener("click", () => {
  content8.style.visibility = "visible"
  content8.style.display = "flex"
})
content8.addEventListener("mouseleave", () => {
  content8.style.visibility = "hidden"
})
bod[0].addEventListener("mouseleave", () => {
  content8.style.visibility = "hidden"
})



let men9 = document.getElementById("btn9")
content9 = document.getElementById("content9")
bod = document.getElementsByTagName("body")


men9.addEventListener("click", () => {
  content9.style.visibility = "visible"
  content9.style.display = "flex"
})
content9.addEventListener("mouseleave", () => {
  content9.style.visibility = "hidden"
})
bod[0].addEventListener("mouseleave", () => {
  content9.style.visibility = "hidden"
})

// ===============nav bar end==========================

// starts from login button on admin page
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

// left box starts as sidebar section
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

// Admin login page for confirmation

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

// After Admin Login functionalities are implemented

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
              <h3 id="cat">Categories</h3>
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

// categories dashboard are visible

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

// Back key navigation going back to category

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

// fishing categories are visible

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

// fishing functonalities are visible

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
    add_button_fish();
    deleteProduct_fish();
    update_Product_fish();
    // sort_Products();
}

// Boating functonalities are visible

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
    add_button_boat();
    deleteProduct_boat();
    update_Product_boat();
    // sort_Products();
}

// Shooting functonalities are visible

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
    // sort_Products();
}

// Back to category dashboard

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
  
//  Fetch Fishing Products in rightbox
  
function ft_btn_fish() {
    let ft_btn_fish = document.querySelector("#ft_btn_fish");

    ft_btn_fish.addEventListener("click", (e) => {
      Rightbox.style.background = "white";
      Rightbox.innerHTML = "";

    Rightbox.innerHTML = `
    <div id="loading" style=" background-color:white; height:6100px;" >
    <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47e0i5htun0ws8m841v4mzo2yy6of6j5q4ye6jswrb&rid=giphy.gif&ct=g" alt="err" >
    <p style="font-size:24px">Please wait page is loading ...</p>
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
            let Fish_data = await res.json();
            DisplayProduct_fish(Fish_data);
          }
    } catch {
        console.log("Failed to fetch Product");
    }
}

// Products are displayed here

function DisplayProduct_fish(Fish_data) {
    Rightbox.innerHTML = "";
    Rightbox.innerHTML = `
        <div id="Cards">
            ${Fish_data
                .map((el) => {
                    return `<div Class="SmallCards">
                        <img src="${el.img}" alt="Error" style="background-color:white"><br>
                              <h3>ID:- ${el.id}</h3><br>
                              <h3>${el.title}</h3><br>
                              <h3>${el.brand}</h3><br>
                              <h3>Rs. ${el.price}</h3><br>
                            </div>`;
                    })
                    .join(" ")} 
          </div> `;
}

// Add fishing Product in Rightbox

function add_button_fish() {
  let add_btn_fish = document.querySelector("#ad_btn_fish");

  add_btn_fish.addEventListener("click", (e) => {
    Rightbox.innerHTML = "";

    Rightbox.innerHTML = `
         <div id="FormInput">
            <h3 style="font-size:25px" id="inputHeader">Fishing Product Form</h3>
             <form>
                
                <input type="text" id="id" placeholder="Enter Product Id" required maxlength="2">
                
                <br>
                
                <input type="url" id="img" required="Mandatory Field" placeholder="Enter Product Url" >
                <br>
                
                <input type="text" id="brand" required="Mandatory Field" placeholder="Enter Product brand" >
                <br>
                
                <input type="text" id="title" required="Mandatory Field" placeholder="Enter Product Title" >
                <br>
                <input type="number" id="price" required="Mandatory Field" placeholder="Enter Product Price" > 
                
                <br>
                <input type="submit">
             </form>
         </div>
         <div class="dataShow">
         </div> 
       `;
    InputTag_fish();
  });
}
var arr = [];

function InputTag_fish() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let productInput = document.querySelectorAll("input");
    let newProduct = {};
    for (let i = 0; i < productInput.length - 1; i++) {
      newProduct[productInput[i].id] = productInput[i].value;
    }
    AddPro_fish(newProduct);
  });
}

async function AddPro_fish(data) {
  try {
    let product = await fetch(
      "https://6398195577359127a04715b0.mockapi.io/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (product.ok) {
      let finalProduct = await product.json();
      alert("Product Added Successfully");
      setTimeout(() => {
        document.querySelector("#id").value = "";
        document.querySelector("#image").value = "";
        document.querySelector("#brand").value = "";
        document.querySelector("#title").value = "";
        document.querySelector("#price").value = "";
      }, 1000);

      arr.push(finalProduct);
      console.log(arr);
      add_fish(arr);
    } else {
      alert("Product Not Added ! Please try again !");
    }
  } catch (error) {
    console.log("Fetching product failed");
  }
}

function add_fish(finalProduct) {
  document.querySelector(".dataShow").innerHTML = `
                     ${finalProduct
                       .map((el) => {
                         return `<div class="displayCard">
                               <img src="${el.img}" alt="Error" style="background-color:white"><br>
                               <h3>ID:- ${el.id}</h3><br>
                               <h3>${el.title}</h3><br>
                               <h3>${el.brand}</h3><br>
                               <h3>Rs. ${el.price}</h3><br>
                             </div>`;
                       })
                       .join(" ")}
         `;
}

// // sort fish products
// let origRes =  Fish_data.json()
//     renderItem(origRes)
//     sort_Product.addEventListener("click", (e) => {
//       origRes.sort((a,b) => a.price - b.price)
//       renderItem(origRes)
//     })


// Delete fishing product in database

function deleteProduct_fish() {
  document.querySelector("#de_btn_fish").addEventListener("click", () => {
    Rightbox.innerHTML = "";
    Rightbox.innerHTML = `
              <div id="DeleteInput">
                  <form>
                      <input type="text" id="id" placeholder="Enter Product Id" required maxlength="2">
                      <br>
                      <input type="submit">
                  </form>   
              </div>
          `;
    InputTag_fish3();
  });
}

function InputTag_fish3() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let ids = document.querySelector("#id").value;
    InputTag_fish3_1(ids);
  });
}

async function InputTag_fish3_1(ids) {
  try {
    let product = await fetch(
      `https://6398195577359127a04715b0.mockapi.io/products/${ids}`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (product.ok) {
      let finalProduct = await product.json();
      alert("Product Deleted Successfully");
      setTimeout(() => {
        document.querySelector("#id").value = "";
      }, 1000);
    } else {
      alert("Product Not Deleted ! Please try again !");
    }
  } catch (error) {
    console.log("Fetching product failed");
  }
}

// Update fishing Product in the database

function update_Product_fish() {
  document.getElementById("up_btn_fish").addEventListener("click", () => {
    Rightbox.innerHTML = "";

    Rightbox.innerHTML = `
         <div id="FormInput">
            <h3 id="inputHeader" style="font-size:25px">Update Product Form</h3>
             <form>
                
                <input type="text" id="id" placeholder="Enter Product Id" required maxlength="2">
                
                <br>
                
                <input type="url" id="img" required="Mandatory Field" placeholder="Enter Product Url" >
                <br>
                
                <input type="text" id="category" required="Mandatory Field" placeholder="Enter Product brand" >
                <br>
                
                <input type="text" id="title" required="Mandatory Field" placeholder="Enter Product Title" >
                <br>
                <input type="number" id="price" required="Mandatory Field" placeholder="Enter Product Price" > 
                
                <br>
                <input type="submit">
             </form>
         </div>
         <div class="dataShow">
         </div> 
       `;
    update_fish();
  });
}

function update_fish() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let productInput = document.querySelectorAll("input");
    let newProduct = {};
    for (let i = 0; i < productInput.length - 1; i++) {
      newProduct[productInput[i].id] = productInput[i].value;
    }
    InputTag_fish3(newProduct);
  });
}

async function InputTag_fish3(data) {
  var arr1 = [];
  try {
    let ids = document.querySelector("#id").value;
    let product = await fetch(
      `https://6398195577359127a04715b0.mockapi.io/products/${ids}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (product.ok) {
      let finalProduct = await product.json();
      alert("Product Updated Successfully");
      setTimeout(() => {
        document.querySelector("#id").value = "";
        document.querySelector("#image").value = "";
        document.querySelector("#brand").value = "";
        document.querySelector("#title").value = "";
        document.querySelector("#price").value = "";
      }, 1000);
      arr1.push(finalProduct);
      addU_fish(arr1);
    } else {
      alert("Product Not Updated ! Please try again !");
    }
  } catch (error) {
    console.log("Fetching product failed");
  }
}

function addU_fish(finalProduct) {
  document.querySelector(".dataShow").innerHTML = `
                    ${finalProduct
                      .map((el) => {
                        return `<div class="displayCard">
                                    <img src="${el.image}" alt="Error" ><br>
                                    <p>${el.id}</p><br>
                                    <p>${el.brand}</p><br>
                                    <p>${el.title}</p><br>
                                    <p>Rs. ${el.price}</p><br>
                                </div>`;
                      })
                      .join(" ")}
        `;
}

// Fetch boating products in rightbox

function ft_btn_boat() {
  let ft_btn_boat = document.querySelector("#ft_btn_boat");

  ft_btn_boat.addEventListener("click", (e) => {
    Rightbox.style.background = "white";
    Rightbox.innerHTML = "";

  Rightbox.innerHTML = `
  <div id="loading" style=" background-color:white; height:6100px;" >
  <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47e0i5htun0ws8m841v4mzo2yy6of6j5q4ye6jswrb&rid=giphy.gif&ct=g" alt="err" >
  <p style="font-size:24px">Please wait page is loading ...</p>
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
 
// boating products are displayed here

function DisplayProduct_boat(data) {
  Rightbox.innerHTML = "";
  Rightbox.innerHTML = `
      <div id="Cards">
      ${data
        .map((el) => {
            return `<div Class="SmallCards">
                <img src="${el.img}" alt="Error" style="background-color:white"><br>
                      <h3>ID:- ${el.id}</h3><br>
                      <h3>${el.title.substring(0,20)}</h3><br>
                      <h3>${el.brand}</h3><br>
                      <h3>Rs. ${el.price}</h3><br>
                    </div>`;
            })
            .join(" ")} 
  </div> `;
}

// Add boating Product in rightbox

function add_button_boat() {
  let add_btn_boat = document.querySelector("#ad_btn_boat");

  add_btn_boat.addEventListener("click", (e) => {
    Rightbox.innerHTML = "";

    Rightbox.innerHTML = `
         <div id="FormInput">
            <h3 id="inputHeader">Product Form</h3>
             <form>
                
                <input type="text" id="id" placeholder="Enter Product Id" required maxlength="2">
                
                <br>
                
                <input type="url" id="image" required="Mandatory Field" placeholder="Enter Product Url" >
                <br>
                
                <input type="text" id="category" required="Mandatory Field" placeholder="Enter Product brand" >
                <br>
                
                <input type="text" id="title" required="Mandatory Field" placeholder="Enter Product Title" >
                <br>
                <input type="number" id="price" required="Mandatory Field" placeholder="Enter Product Price" > 
                
                <br>
                <input type="submit">
             </form>
         </div>
         <div class="dataShow">
         </div> 
       `;
    InputTag_boat();
  });
}
var arr = [];

function InputTag_boat() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let productInput = document.querySelectorAll("input");
    let newProduct = {};
    for (let i = 0; i < productInput.length - 1; i++) {
      newProduct[productInput[i].id] = productInput[i].value;
    }
    AddPro_boat(newProduct);
  });
}

async function AddPro_boat(data) {
  try {
    let product = await fetch(
      "https://6398195577359127a04715b0.mockapi.io/boating",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (product.ok) {
      let finalProduct = await product.json();
      alert("Product Added Successfully");
      setTimeout(() => {
        document.querySelector("#id").value = "";
        document.querySelector("#image").value = "";
        document.querySelector("#brand").value = "";
        document.querySelector("#title").value = "";
        document.querySelector("#price").value = "";
      }, 1000);

      arr.push(finalProduct);
      console.log(arr);
      add_boat(arr);
    } else {
      alert("Product Not Added ! Please try again !");
    }
  } catch (error) {
    console.log("Fetching product failed");
  }
}

function add_boat(finalProduct) {
  document.querySelector(".dataShow").innerHTML = `
                     ${finalProduct
                       .map((el) => {
                         return `<div class="displayCard">
                                  <img src="${el.img}" alt="Error">
                                  <p>${el.id}</p>
                                  <p>${el.brand}</p>
                                  <p>${el.title.substring(0,20)}</p>
                                  <p>Rs. ${el.price}</p>
                               </div>`;
                       })
                       .join(" ")}
         `;
}

// Delete boating product in database

function deleteProduct_boat() {
  document.querySelector("#de_btn_boat").addEventListener("click", () => {
    Rightbox.innerHTML = "";
    Rightbox.innerHTML = `
              <div id="DeleteInput">
                  <form>
                      <input type="text" id="id" placeholder="Enter Product Id" required maxlength="2">
                      <br>
                      <input type="submit">
                  </form>   
              </div>
          `;
    InputTag_boat2();
  });
}

function InputTag_boat2() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let ids = document.querySelector("#id").value;
    InputTag_boat2_1(ids);
  });
}

async function InputTag_boat2_1(ids) {
  try {
    let product = await fetch(
      `https://6398195577359127a04715b0.mockapi.io/boating/${ids}`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (product.ok) {
      let finalProduct = await product.json();
      alert("Product Deleted Successfully");
      setTimeout(() => {
        document.querySelector("#id").value = "";
      }, 1000);
    } else {
      alert("Product Not Deleted ! Please try again !");
    }
  } catch (error) {
    console.log("Fetching product failed");
  }
}

// Update boating Product in the database 

function update_Product_boat() {
  document.getElementById("up_btn_boat").addEventListener("click", () => {
    Rightbox.innerHTML = "";

    Rightbox.innerHTML = `
         <div id="FormInput">
            <h3 id="inputHeader">Update Product Form</h3>
             <form>
                
                <input type="text" id="id" placeholder="Enter Product Id" required maxlength="2">
                
                <br>
                
                <input type="url" id="image" required="Mandatory Field" placeholder="Enter Product Url" >
                <br>
                
                <input type="text" id="brand" required="Mandatory Field" placeholder="Enter Product Category" >
                <br>
                
                <input type="text" id="title" required="Mandatory Field" placeholder="Enter Product Title" >
                <br>
                <input type="number" id="price" required="Mandatory Field" placeholder="Enter Product Price" > 
                
                <br>
                <input type="submit">
             </form>
         </div>
         <div class="dataShow">
         </div> 
       `;
    update_boat();
  });
}

function update_boat() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let productInput = document.querySelectorAll("input");
    let newProduct = {};
    for (let i = 0; i < productInput.length - 1; i++) {
      newProduct[productInput[i].id] = productInput[i].value;
    }
    InputTag_boat3(newProduct);
  });
}

async function InputTag_boat3(data) {
  var arr1 = [];
  try {
    let ids = document.querySelector("#id").value;
    let product = await fetch(
      `https://6398195577359127a04715b0.mockapi.io/boating/${ids}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (product.ok) {
      let finalProduct = await product.json();
      alert("Product Updated Successfully");
      setTimeout(() => {
        document.querySelector("#id").value = "";
        document.querySelector("#image").value = "";
        document.querySelector("#brand").value = "";
        document.querySelector("#title").value = "";
        document.querySelector("#price").value = "";
      }, 1000);
      arr1.push(finalProduct);
      addU_boat(arr1);
    } else {
      alert("Product Not Updated ! Please try again !");
    }
  } catch (error) {
    console.log("Fetching product failed");
  }
}

function addU_boat(finalProduct) {
  document.querySelector(".dataShow").innerHTML = `
                    ${finalProduct
                      .map((el) => {
                        return `<div class="displayCard">
                                        <img src="${el.image}" alt="Error">
                                        <p>${el.id}</p>
                                        <p>${el.brand}</p>
                                        <p>${el.title}</p>
                                        <p>Rs. ${el.price}</p>
                                </div>`;
                      })
                      .join(" ")}
        `;
}

//User Details are updated here

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
 
// user registration details are here

function UserRegister() {
  document.getElementById("regis_btn").addEventListener("click", () => {
    
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
      <div id="loading" >
        <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47e0i5htun0ws8m841v4mzo2yy6of6j5q4ye6jswrb&rid=giphy.gif&ct=g" alt="err" >
        <p style="font-size:24px">Please wait page is loading ...</p>
      </div>
    `;
    setTimeout(() => {
      document.querySelector("#Right").innerHTML = "";
      tableStructure();
    }, 500);
  });
}

function tableStructure() {
  document.querySelector("#Left").innerHTML = `
  <div id="Container_user">
      <button id="Back"><</button>
      <h1>Register Details</h1>
  </div>
`;
  document.querySelector("#Right").innerHTML = `
  <h3 id="head_regDetails">Register User Details</h3>
        <table>
              <thead id="head">
                    <tr class="navRow">
                        <td class="details">Id</td>
                        <td class="details">User</td>
                        <td class="details">Address</td>
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
                      <td class="details">${el.firstName+" "+el.Lastname}</td>
                      <td class="details">${el.street+", "+el.city+"-"+el.zip}</td>
                      <td class="details">${el.phone}</td>
                      <td class="details">${el.email}</td>
                      <td class="details">${el.password}</td>
                  </tr>`;
          })
          .join(" ")}
  </tr>
  `;
}

// login details are here

function UserLogin() {(251, 243, 244)
  document.getElementById("user_btn").addEventListener("click", () => {
    document.querySelector("#Right").innerHTML = "";
    document.querySelector("#Right").innerHTML = `
      <div id="loading">
        <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47e0i5htun0ws8m841v4mzo2yy6of6j5q4ye6jswrb&rid=giphy.gif&ct=g" alt="err" style="width:50px;height:50px">
        <p style="font-size:24px">Please wait page is loading ...</p>
     </div>
    `;
    setTimeout(() => {
      document.querySelector("#Right").innerHTML = "";
      tableStructure_lo();
    }, 500);
  });
}

function tableStructure_lo() {
  document.querySelector("#Left").innerHTML = `
  <div id="Container_user">
      <button id="Back"><</button>
      <h1>Login Details</h1>
  </div>
`;
  document.querySelector("#Right").innerHTML = `
  <h3 id="head_regDetails">Login User Details</h3>
        <table>
              <thead id="head" style="height:20px; font-size:15px">
                    <tr class="navRow">
                        <td class="details_1">Id</td>
                        <td class="details_1">Username</td>
                        <td class="details_1">Password</td>
                    </tr>
              </thead>
              <tbody id="mainContainer_tc" style="height:20px; font-size:15px">
                   
              </tbody>
          </table>
  `;
  recent_1();
  login_1();
}

async function login_1() {
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
                      <td class="details_1">${el.email}</td>
                      <td class="details_1">${el.password}</td>
                  </tr>`;
          })
          .join(" ")}
  </tr>
  `;
}



























