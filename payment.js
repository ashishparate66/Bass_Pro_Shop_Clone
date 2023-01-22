

let shippingData = JSON.parse(localStorage.getItem("shipping-Add")) || []
let billingData = JSON.parse(localStorage.getItem("billing-Add")) || []
let paymentData = JSON.parse(localStorage.getItem("payment-data")) || []
let form = document.querySelector("#form_card")

let originalOTP = document.querySelector("span")
form.addEventListener("submit", finalpayment)

function finalpayment(e) {
    e.preventDefault()
    let cardNumber = document.getElementById("card_number").value
    let monthYear = document.getElementById("month_year").value
    let cvv = document.getElementById("cvv").value
    let user1 = { cardNumber, monthYear, cvv }
    paymentData.push(user1)
    localStorage.setItem("payment-data", JSON.stringify(paymentData))

    var digits = "0123456789"
    let otp = ""
    for (let i = 0; i < 4; i++) {
        otp += digits[Math.floor(Math.random() * 10)]
    }

    return originalOTP.innerHTML = otp
}

function verifyOTP(){
    var myOTP = document.getElementById("enter").value
    if( originalOTP.innerHTML == myOTP){
        alert("Order is Place Succefully")
        window.location.href="index.html"
    }
    else{
        alert("Wrong OTP")
    }
}

document.getElementById("verifyBtn").onclick = function () {
    verifyOTP()
}




// second div 
let billing_append = document.getElementById("payment_second")

billingData.forEach((item) => {
    let user2 = `
<div id="billingAppend">
<h3>Billing Address</h3>
<h5>${item.name} ${item.last}</h5>
<p>${item.city}, ${item.state}</p>
<p>${item.country}.</p>
<p>${item.zipcode}.</p>
<p>${item.phone}</p>
<p>${item.email}</p>
<a href="shipping.html">Edit </a>
</div>
`
    billing_append.innerHTML = user2
})