const itemCardTemplate = document.querySelector("[data-item-template]")
const itemCardContainer = document.querySelector("[data-item-container]")
const searchInput = document.querySelector("[data-search]")



searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    items.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(value) || item.ename.toLowerCase().includes(value)
        item.element.classList.toggle("hide", !isVisible)
        console.log(isVisible)
    });
})

function update(){
    var id = document.getElementById("filter").value;
    console.log(x);
    if (id === "1") {
        console.log("mod1")
        items.forEach(item => {
            const isVisible = item.mod.includes()
            item.element.classList.toggle("hide", !isVisible)
        });
    } else {
        if (id === "2"){
            console.log("mod2")
            element.classList.toggle("hide")
        } else {
            if (id === "3"){
                console.log("mod3")
                element.classList.toggle("hide")
            } else {
                if (id === "0") {
                    console.log("keine mod")
                    element.classList.toggle("hide")
                } else {
                    console.log("error")
                }
            }
        }
    }
}




fetch("items.json")
.then(res => res.json())
.then(data => {
    items = data.map(item => {
    const card = itemCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    const mod = card.querySelector("[data-mod]")
/*     const pic = card.querySelector("[data-pic]")
    pic.textContent = item.pic */
    header.textContent = item.name
    body.textContent = item.ename
    mod.textContent = item.mod
    itemCardContainer.append(card)
    return{ name: item.name, ename: item.ename, mod: item.mod, element: card }
    })
})