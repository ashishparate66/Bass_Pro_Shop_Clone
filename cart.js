
// let cartData = JSON.parse(localStorage.getItem("done")) || []

let checkout = document.getElementById("checkout")
checkout.addEventListener("click", checkoutPage)
let checkout1 = document.getElementById("checkout1")
checkout1.addEventListener("click", checkoutPage)
function checkoutPage() {
    window.location.href = "shipping.html"
}

let container = document.querySelector(".cart-page")
let tbody = document.querySelector("table")

function renderCard(qty,price) {
    let cardList =
  `
        <table id="first_table">
            <tr>
                <th>Product</th>
                <th>Availability</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
            </tr>

            <tr>
                <td style="width: 800px;">
                    <div class="cart-info">
                        <img src=" https://assets.basspro.com/image/upload/b_rgb:FFFFFF,c_limit,dpr_1.0,f_auto,h_1262,q_auto,w_2600/c_limit,h_1262,w_2600/v1/ProductImages/100/master1_100273329_main?pgw=1"
                            alt="">
                            <div class="cart-details">
                                <p>Bass Pro Shops Johnny
                                    Morris Carbonlite 2.0
                                    Spinning Reel - Model
                                    JCT1000</p>
                                <a href="">Remove</a>
                            </div>
                    </div>
                </td>

                <td>Ship to Address</td>
                <td><input type="number" value="${qty}"></td>
                <td>$ ${price}</td>
                <td>$ ${qty*price}</td>
            </tr>
        </table>
        <div class="total-price">
        <table id="second_table">
            <tr>
                <td>Product Subtotal</td>
                <td>$ ${qty*price}</td>
            </tr>
            <tr id="shipping-free-row">
                <td>Shipping</td>
                <td>FREE</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>$ ${qty*price}</td>
            </tr>

        </table>
    </div>
    `
container.innerHTML = cardList

}
 renderCard(1,300)