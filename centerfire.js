let container = document.getElementById("grid-1")
let result = document.getElementById("results")
let sPrice = document.getElementById("sPrice")
let two = document.getElementById("two")
let three = document.getElementById("three")


async function fetchData() {

    let data = await fetch("./product.json")
    let finalData = await data.json()
    arrangeData(finalData.gun_sub)
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
            let fakeData = newData.filter((item) => item.brand == "Beretta")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
        }
        else if (b1.checked == false) {
            useData(newData)
        }
    })
    b2.addEventListener("change", () => {
        if (b2.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Bond Arms")
            useData(fakeData)
            b1.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
        }
        else if (b2.checked == false) {
            useData(newData)
        }
    })
    b3.addEventListener("change", () => {
        if (b3.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Browning")
            useData(fakeData)
        }
        else if (b3.checked == false) {
            useData(newData)
            b2.checked = false
            b1.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
        }
    })
    b4.addEventListener("change", () => {
        if (b4.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Canik")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b1.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
        }
        else if (b4.checked == false) {
            useData(newData)
        }
    })
    b5.addEventListener("change", () => {
        if (b5.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Charles Daly")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b1.checked = false
            b6.checked = false
            b7.checked = false
            b8.checked = false
        }
        else if (b5.checked == false) {
            useData(newData)
        }
    })
    b6.addEventListener("change", () => {
        if (b6.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Charter Arms")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b1.checked = false
            b7.checked = false
            b8.checked = false
        }
        else if (b6.checked == false) {
            useData(newData)
        }
    })
    b7.addEventListener("change", () => {
        if (b7.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Colt")
            useData(fakeData)
            b2.checked = false
            b8.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b1.checked = false
        }
        else if (b7.checked == false) {
            useData(newData)
        }
    })
    b8.addEventListener("change", () => {
        if (b8.checked == true) {
            let fakeData = newData.filter((item) => item.brand == "Davide Pedersoli")
            useData(fakeData)
            b2.checked = false
            b3.checked = false
            b4.checked = false
            b5.checked = false
            b6.checked = false
            b7.checked = false
            b1.checked = false
        }
        else if (b8.checked == false) {
            useData(newData)
        }
    })

    p1.addEventListener("change", () => {
        if (p1.checked == true) {
            let fakeData = newData.filter((item) => item.price < 500)
            useData(fakeData)
        }
        else if (p1.checked == false) {
            useData(newData)
            p2.checked = false
            p3.checked = false
        }
    })
    p2.addEventListener("change", () => {
        if (p2.checked == true) {
            let fakeData = newData.filter((item) => item.price > 500 && item.price < 1000)
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
            let fakeData = newData.filter((item) => item.price > 1000 && item.price < 2000)
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
            p1.checked = false
            p2.checked = false
            p3.checked = false
            two.classList.toggle("show")
            three.classList.toggle("show")
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
                    b7.checked = false
                    b8.checked = false
                    p1.checked = false
                    p2.checked = false
                    p3.checked = false
                    sale.checked = false
                    window.location.assign("uniproduct.html")
                })
            })
        }
        else if (sale.checked == false) {

            two.classList.toggle("show")
            three.classList.toggle("show")
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
            b7.checked = false
            b8.checked = false
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
