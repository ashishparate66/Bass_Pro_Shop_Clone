
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






   
//     qty[i].addEventListener("change",function (event){
      
//         let tot = qty[i].value * event.target.offsetParent.offsetParent.children[0].children[1].children[3].innerText;

//         event.target.offsetParent.offsetParent.children[0].children[1].children[4].innerText = tot;

//           total = total + qty[i].value * event.target.offsetParent.offsetParent.children[0].children[1].children[3].innerText
//          t = total
//          console.log(total)
         
 