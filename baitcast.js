let container = document.getElementById("grid-1")
let result = document.getElementById("results")
let sPrice = document.getElementById("sPrice")



async function fetchData() {

    let data = await fetch("./product.json")
    let finalData = await data.json()
    arrangeData(finalData.Fish_sub)
}
fetchData()

function arrangeData(data) {

    let newData = []

    data.forEach(item => {
        let obj = {
            image: item.img,
            name: item.title,
            discount: item.offer,
            brand: item.brand,
            price: item.price,
            rating: item.rating,
            orig: item.orig
        }

        newData.push(obj)
    });


    useData(newData)

    b1.addEventListener("change", () => {
        if (b1.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "13 Fishing")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
            b9.checked = false

        }
        else if (b1.checked == false) {
            useData(newData)
        }
    })
    b2.addEventListener("change", () => {
        if (b2.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Ardent")
            useData(fakeData)
            b1.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
            b9.checked = false
        }
        else if (b2.checked == false) {
            useData(newData)
        }
    })
    b3.addEventListener("change", () => {
        if (b3.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Bates Fishing")
            useData(fakeData)
            b2.checked = false
            b1.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
            b9.checked = false
        }
        else if (b3.checked == false) {
            useData(newData)
        }
    })
    b4.addEventListener("change", () => {
        if (b4.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Offshore Angler")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b1.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
            b9.checked = false
        }
        else if (b4.checked == false) {
            useData(newData)
        }
    })
    b5.addEventListener("change", () => {
        if (b5.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Okuma")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b1.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
            b9.checked = false
        }
        else if (b5.checked == false) {
            useData(newData)
        }
    })
    b6.addEventListener("change", () => {
        if (b6.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Penn")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b1.checked = false
            b7.checked = false
            b8.checked = false
            b9.checked = false
        }
        else if (b6.checked == false) {
            useData(newData)
        }
    })
    b7.addEventListener("change", () => {
        if (b7.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "ProFISHiency")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b1.checked = false
            b8.checked = false
            b9.checked = false
        }
        else if (b7.checked == false) {
            useData(newData)
        }
    })
    b8.addEventListener("change", () => {
        if (b8.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Quantum")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b1.checked = false
            b9.checked = false
        }
        else if (b8.checked == false) {
            useData(newData)
        }
    })
    b9.addEventListener("change", () => {
        if (b9.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Uncle Buck's")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
            b1.checked = false
        }
        else if (b9.checked == false) {
            useData(newData)
        }
    })
    p1.addEventListener("change", () => {
        if (p1.checked == true) {
            let fakeData = newData.filter((item) => item.price < 100)
            useData(fakeData)
            p2.checked = false
            p3.checked = false
        }
        else if (p1.checked == false) {
            useData(newData)
        }
    })
    p2.addEventListener("change", () => {
        if (p2.checked == true) {
            let fakeData = newData.filter((item) => item.price > 100 && item.price < 200)
            useData(fakeData)
            p1.checked = false
            p3.checked = false

        }
        else if (p2.checked == false) {
            useData(newData)
        }
    })
    p3.addEventListener("change", () => {
        if (p3.checked == true) {
            let fakeData = newData.filter((item) => item.price > 200 && item.price < 300)
            useData(fakeData)
            p2.checked = false
            p1.checked = false

        }
        else if (p3.checked == false) {
            useData(newData)
        }
    })

    sale.addEventListener("change", () => {
        let count = 0
        if (sale.checked == true) {
            let fakeData = newData.filter((item) => item.discount == true)
            let arr = []
            fakeData.forEach(item => {
                arr.push(offCard(item.image, item.name, item.orig, item.price))
                count++
            })

            result.innerText = `${count} Search Results`
            container.innerHTML = null
            container.innerHTML = arr.join("")
            b1.checked = false
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
            b9.checked = false
            p1.checked = false
            p2.checked = false
            p3.checked = false
        }
        else if (sale.checked == false) {
            useData(newData)
        }
    })




}

function useData(data) {

    sPrice.addEventListener("change", () => {
        if (sPrice.value == "A-Z") {
            data.sort((a, b) => a.price - b.price)
            useData(data)
        }
        else if (sPrice.value == "Z-A") {
            data.sort((b, a) => a.price - b.price)
            useData(data)
        }
        else if (sPrice.value == "") {
            useData(data)
        }
    })
    let count = 0
    let finalData = []
    container.innerHTML = null
    data.forEach((item, index) => {

        finalData.push(constCard(item.image, item.name, item.price, item.rating))
        count++
    })
    result.innerText = ""
    result.innerText = `${count} Search Results`
    container.innerHTML = finalData.join("")
}

function constCard(image, name, price, rating) {
    let str = []
    let arr = [`<i class="fa-solid fa-star">`, `<i class="fa-solid fa-star">`, `<i class="fa-solid fa-star">`, `<i class="fa-solid fa-star-half-stroke"></i>`]
    for (let i = 0; i < rating; i++) {
        str.push(arr[i])
    }

    let card = `
    <div id="smallblock" >
    <img src=${image} alt="" />
    <h6 id="title">${name}</h6>
    <div id="rate">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    </div>
    <b>$${price}</b>
    </div>
    `
    return card

}

function offCard(image, name, orig, price,) {
    let card = `
    <div id="smallblock" >
    <img src=${image} alt="" />
    <h6 id="title">${name}</h6>
    <div id="rate">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    </div>
    <i id="oprice">$${orig}</i>
    <b>$${price}</b>
    </div>
    `
    return card
}

