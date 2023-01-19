let container = document.getElementById("grid_container")

async function fetchData() {

    let data = await fetch("./API.json")
    let finalData = await data.json()
    makecards(finalData.fishing)
}
fetchData()

function makecards(data) {
    let dataarr = []
    data.forEach(item => {
        dataarr.push(constCard(item.img, item.title))
    });
    container.innerHTML = dataarr.join("")
}

function constCard(image, title) {

    let card = `
    <div id="smallblock" >
    <img src=${image} alt="" />
    <h3 id="title" >${title}</h3>
    </div>
    `
    return card
}