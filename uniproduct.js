let item = JSON.parse(localStorage.getItem("pro"))
let main = document.getElementById("main1")
let aside = document.getElementById("aside1")
let titl = document.getElementById("head")
let arr = JSON.parse(localStorage.getItem("product_cart")) || []
titl.innerText = `${item[0].brand}`
function arrangeData(item) {

  let obj = {
    image: item[0].image,
    brand: item[0].brand,
    description: item[0].desc,
    name: item[0].name,
    price: item[0].price,
    rating: item[0].rating
  }
  let mainArr = []
  mainArr.push(mainStruct(obj.image, obj.brand, obj.description))
  main.innerHTML = mainArr

  let asideArr = []
  asideArr.push(asideStruct(obj.name, obj.price, obj.rating))
  aside.innerHTML = asideArr

  let button = document.getElementById("btn")
  button.addEventListener("click", () => {
    let flag = true
    if (arr.length != 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == item[0].name) {
          flag = false
          break
        }
      }
    }
    if (flag == false) {
      alert("Already in the cart")
    }
    else if (flag) {
      arr.push(item[0])
      localStorage.setItem("product_cart", JSON.stringify(arr))
      alert("Item successfully added to the cart")
    }
  })
}


function mainStruct(image, brand, desc) {

  let mainData = `
    <img src="${image}" alt="" />
    <h4 id="desc">DESCRIPTION</h4>
    <b>${brand}</b>
    <p>${desc}</p>
    `
  return mainData
}

function asideStruct(name, price, rating) {

  // let n = Math.ceil(Math.random() * 9)
  // let date = Math.ceil(Math.random() * (30 - 2)) + 2
  let rev = Math.ceil(Math.random() * (60 - 40)) + 40

  let asideData = `
    <h3>${name}</h3>
    <div id="rate"> <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    <i>4.4 (${rev})</i>
    </div>
    <h3>$${price}</h3>
    <p>SAVE TODAY! Pay $79.99 with $${rating}0 in CLUB Points upon approval to use on today's order.</p>
    <i id="odate" >ORDER BY ${rating}PM E.T. FOR JAN ${rating + 5} DELIVERY</i>
    <button id="btn">Add to Cart</button>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        CUSTOMER REVIEW
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <b>Satisfaction</b> ${rating + 8} reviews
      <p>I bought this product a couple days ago and used  it five times <br>
   already and absolutely love it! (Full review)
</p>
 <b>Price</b> ${rating + 18} reviews
      <p> Great product at a Great Price (Full review)
</p>
</div>
<div id="flex-sig">
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
    </div>
  </div>
</div>
   `
  return asideData
}

arrangeData(item)
