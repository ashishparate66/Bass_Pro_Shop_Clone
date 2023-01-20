let container = document.getElementById("grid-1")
let result = document.getElementById("results")
let sPrice = document.getElementById("sPrice")

let two = document.getElementById("two")
let three = document.getElementById("three")

async function fetchData() {

    let data = await fetch("./product.json")
    let finalData = await data.json()
    arrangeData(finalData.boating_sub)
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
            orig: item.orig,
            desc: item.description
        }

        newData.push(obj)
    });
    result.innerHTML = ""
    result.innerHTML = `${newData.length} Search Results`
    useData(newData.slice(0, 12))
    btnData(newData)

    b1.addEventListener("change", () => {
        if (b1.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Aqua-Vu")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
        }
        else if (b1.checked == false) {
            useData(newData)
        }
    })
    b2.addEventListener("change", () => {
        if (b2.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Hawkeye")
            useData(fakeData)
            b1.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
        }
        else if (b2.checked == false) {
            useData(newData)
        }
    })
    b3.addEventListener("change", () => {
        if (b3.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "IBobber")
            useData(fakeData)
            b2.checked = false
            b1.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
        }
        else if (b3.checked == false) {
            useData(newData)
        }
    })
    b4.addEventListener("change", () => {
        if (b4.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "MarCum")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b1.checked = false
            b5.checked = false
            b6.checked = false
        }
        else if (b4.checked == false) {
            useData(newData)
        }
    })
    b5.addEventListener("change", () => {
        if (b5.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Raymarine")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b1.checked = false
            b6.checked = false
        }
        else if (b5.checked == false) {
            useData(newData)
        }
    })
    b6.addEventListener("change", () => {
        if (b6.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Simrad")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b1.checked = false
        }
        else if (b6.checked == false) {
            useData(newData)
        }
    })

    p1.addEventListener("change", () => {
        if (p1.checked == true) {
            let fakeData = newData.filter((item) => item.price < 1000)
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
            let fakeData = newData.filter((item) => item.price > 1000 && item.price < 2000)
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
            let fakeData = newData.filter((item) => item.price > 2000 && item.price < 3000)
            useData(fakeData)
            p1.checked = false
            p2.checked = false

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
            p1.checked = false
            p2.checked = false
            p3.checked = false

            two.classList.remove("show")
            three.classList.remove("show")

            let card = document.querySelectorAll("#smallblock")
            fakeData.forEach((item, index) => {
                card[index].addEventListener("click", () => {
                    let arr = []
                    arr.push(item)
                    localStorage.setItem("pro", JSON.stringify(arr))
                    b1.checked = false
                    b2.checked = false
                    b3.checked = false
                    b4.checked = false
                    b5.checked = false
                    b6.checked = false
                    p1.checked = false
                    p2.checked = false
                    p3.checked = false
                    sale.checked = false
                    window.location.assign("uniproduct.html")
                })
            })
        }
        else if (sale.checked == false) {
            two.classList.add("show")
            three.classList.add("show")
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
    let finalData = []
    container.innerHTML = null
    data.forEach((item, index) => {

        finalData.push(constCard(item.image, item.name, item.price, item.rating))
    })

    container.innerHTML = finalData.join("")
    let card = document.querySelectorAll("#smallblock")
    data.forEach((item, index) => {
        card[index].addEventListener("click", () => {
            let arr = []
            arr.push(item)
            localStorage.setItem("pro", JSON.stringify(arr))
            b1.checked = false
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            p1.checked = false
            p2.checked = false
            p3.checked = false
            sale.checked = false
            window.location.assign("uniproduct.html")
        })
    })
}


function btnData(data) {
    one.addEventListener("click", () => {
        let newdata = data.slice(0, 12)
        useData(newdata)
    })
    two.addEventListener("click", () => {
        let newdata = data.slice(12, 24)
        useData(newdata)
    })
    three.addEventListener("click", () => {
        let newdata = data.slice(24, data.length)
        useData(newdata)
    })

}

function constCard(image, name, price, rating) {
    // let str = ""
    // let arr = [`<i class="fa-solid fa-star">`, `<i class="fa-solid fa-star">`, `<i class="fa-solid fa-star">`, `<i class="fa-solid fa-star-half-stroke"></i>`]
    // for (let i = 0; i < rating; i++) {
    //     str += arr[i]
    // }
    // console.log(str)
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
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    </div>
    <i id="oprice">$${orig}</i>
    <b>$${price}</b>
    </div>
    `
    return card
}

