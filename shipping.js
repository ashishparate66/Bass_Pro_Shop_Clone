let shippingData = JSON.parse(localStorage.getItem("shipping-Add")) || []
let billingData = JSON.parse(localStorage.getItem("billing-Add")) || []
let productData = JSON.parse(localStorage.getItem("product_cart")) || []
let totalFinal = document.querySelector("#total_final")
let totalFinal1 = document.querySelector("#total_final1")

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


let totalPrice = document.querySelector("#second_div_shiiping1")

     
    renderCard(productData);

    function renderCard(productData) {
        totalPrice.innerHTML =  productData.map(element => {
            return `
            <table id="first_table">
                <tr>
                    <td style="width: 800px;">
                        <div class="cart-info">
                            <img src=${element.image}
                                alt="">
                                <div class="cart-details">
                                    <p>${element.name}</p>
                                    
                                </div>
                        </div>
                    </td>
        
                    <td><p id="qty">1</p></td>
                    <td id="ordvalue"> ${element.price}</td>    
                </tr>
            </table>
           
        `
        });
    
            
       
       
    }



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

