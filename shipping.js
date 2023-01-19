let shippingData = JSON.parse(localStorage.getItem("shipping-Add")) || []
let billingData = JSON.parse(localStorage.getItem("billing-Add")) || []

let form = document.getElementById("form")
form.addEventListener("submit", submitShipAdd)

function submitShipAdd(e) {
    e.preventDefault()
    let country = document.getElementById("country").value
    let name = document.getElementById("name").value
    let last = document.getElementById("last").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let zipcode = document.getElementById("zipcode").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value

    let user = { country, name, last, city, state, zipcode, phone, email }
    shippingData.push(user)
    localStorage.setItem("shipping-Add", JSON.stringify(shippingData))
   
}


let form1 = document.getElementById("form1")
form1.addEventListener("submit", submitBillingAdd)

function submitBillingAdd(e) {
    e.preventDefault()
    let country = document.getElementById("country1").value
    let name = document.getElementById("name1").value
    let last = document.getElementById("last1").value
    let city = document.getElementById("city1").value
    let state = document.getElementById("state1").value
    let zipcode = document.getElementById("zipcode1").value
    let phone = document.getElementById("phone1").value
    let email = document.getElementById("email1").value

    let user1 = { country, name, last, city, state, zipcode, phone, email }
    billingData.push(user1)
    localStorage.setItem("billing-Add", JSON.stringify(billingData))

}


let totalPrice = document.querySelector("#second_div_shiiping")

function renderCard(qty, price) {
    let cardList =
        ` <div class="total-price">
        <table id="second_table">
            <tr>
                <td>Product Subtotal</td>
                <td>$ ${qty * price}</td>
            </tr>
            <tr id="shipping-free-row">
                <td>Shipping</td>
                <td>FREE</td>
            </tr>
            <tr>
                <td><h4>Total</h4></td>
                <td><h4>$ ${qty * price}</h4></td>
            </tr>
    
        </table>
    </div>
        <div id="first_table_div">
        <table id="first_table">
            <tr>
                <td >
                    <div class="cart-info">
                        <img src=" https://assets.basspro.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1.0,f_auto,h_1262,q_auto,w_2600/c_limit,h_1262,w_2600/v1/ProductImages/100/master1_100273329_main?pgw=1"
                            alt="">
                            <div class="cart-details">
                                <p>Bass Pro Shops Johnny
                                    Morris Carbonlite 2.0
                                    Spinning Reel - Model
                                    JCT1000</p>
                            </div>
                    </div>
                </td>
               
                <td><input type="number" value="${qty}"></td>
                <td>$${qty * price}</td>
               
            </tr>
        </table>  
        
       </div>
       <div id="edit_cart_div" >
        <button id="edit_cart_btn"><b>EDIT SHOPPING CART <b></button>
        </div>
    `

    totalPrice.innerHTML = cardList

}
renderCard(1, 300)



let paymentContinueBtn = document.querySelector(".submit1")
paymentContinueBtn.addEventListener("click",paymentContinue)

function paymentContinue(){
    window.location.href="payment.html"
}

let editCartBtn = document.querySelector("#edit_cart_btn")
editCartBtn.addEventListener("click",editCart)

function editCart(){
    window.location.href="cart.html"
}

