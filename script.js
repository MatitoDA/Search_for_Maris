const itemCardTemplate = document.querySelector("[data-item-template]")
const itemCardContainer = document.querySelector("[data-item-container]")
const searchInput = document.querySelector("[data-search]")



searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    items.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(value) || item.ename.toLowerCase().includes(value)
        item.element.classList.toggle("hide", !isVisible)
    });
})


fetch("items.json")
.then(res => res.json())
.then(data => {
    items = data.map(item => {
    const card = itemCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    const pic = card.querySelector("[data-pic]")
    pic.textContent = item.pic
    header.textContent = item.name
    body.textContent = item.ename
    itemCardContainer.append(card)
    return{ name: item.name, ename: item.ename, element: card }
    })
})