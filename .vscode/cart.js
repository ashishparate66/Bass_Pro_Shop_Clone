
 let productData = JSON.parse(localStorage.getItem("product_cart")) || []
 let totalFinal = document.querySelector("#total_final")
 let totalFinal1 = document.querySelector("#total_final1")

let checkout = document.getElementById("checkout")
checkout.addEventListener("click", checkoutPage)
let checkout1 = document.getElementById("checkout1")
checkout1.addEventListener("click", checkoutPage)
function checkoutPage() {
    window.location.href = "shipping.html"
   
}

let container = document.querySelector(".cart-page")
let tbody = document.querySelector("table")
renderCard(productData);

function renderCard(productData) {
    container.innerHTML =  productData.map(element => {
      
        return `
        <table id="first_table">
            <tr>
                <th>Product</th>
                <th>Availability</th>
                <th>Quantity</th>
                <th>Price</th>    
            </tr>

            <tr>
                <td style="width: 800px;">
                    <div class="cart-info">
                        <img src=${element.image}
                            alt="">
                            <div class="cart-details">
                                <p>${element.name}</p>
                                <a href="" id="removeBtn">Remove</a>
                            </div>
                    </div>
                </td>
                <td>Ship to Address</td>
                <td><button id="sub">-</button><p id="qty">1</p> <button id="add">+</button></td>
                <td id="ordvalue"> ${element.price}</td>    
            </tr>
        </table>
        
    `
    });

        
   
    let ordvalue = document.querySelectorAll("#ordvalue")
    let removeBtn = document.querySelectorAll("#removeBtn")
    let qty = document.querySelectorAll("#qty");
    let add = document.querySelectorAll("#add");
    let sub = document.querySelectorAll("#sub");
  
    let tot = 0
    let orderData = []
    productData.forEach((user, index) => {
    tot += user.price
    totalFinal.innerHTML= tot.toFixed(2);
    totalFinal1.innerHTML= tot.toFixed(2);
        removeBtn[index].addEventListener("click", () => {
            productData.splice(index, 1)
            renderCard(productData)
            let newData = productData
            localStorage.setItem("product_cart", JSON.stringify(newData))

        });

        add[index].addEventListener("click", () => {
            let quantity = qty[index].innerText;
            quantity++;
            let t = user.price;
            tot += user.price
            qty[index].innerText = quantity;
            ordvalue[index].innerText=""
            let t1 = t*quantity
            ordvalue[index].innerText = t1.toFixed(2);
            totalFinal.innerHTML= tot.toFixed(2);
            totalFinal1.innerHTML= tot.toFixed(2); 
           
        })

        sub[index].addEventListener("click", () => {
            let quantity = qty[index].innerText;
            if(quantity > 1){
                quantity--;
            let t = user.price
            tot = tot - user.price;
            qty[index].innerText = quantity;
            ordvalue[index].innerText=""
            let t1 = t*quantity
            ordvalue[index].innerText = t1.toFixed(2);;
            totalFinal.innerHTML= tot.toFixed(2);t
            totalFinal1.innerHTML= tot.toFixed(2); 
          
            }
        })
       
       
    })
   
   
}




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



// ===============nav bar enad==========================