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

  let button = document.getElementById("btne")
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
    <button id="btne">Add to Cart</button>
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
