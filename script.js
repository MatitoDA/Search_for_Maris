/* MIT License

Copyright (c) 2022 MatitoDA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const itemCardTemplate = document.querySelector("[data-item-template]")
const itemCardContainer = document.querySelector("[data-item-container]")
const searchInput = document.querySelector("[data-search]")

let items = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    items.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(value) || 
        item.ename.toLowerCase().includes(value) || 
        item.mod.toLowerCase().includes(value)
        item.element.classList.toggle("hide", !isVisible)
    })
})


function update() {
    var select = document.getElementById('filter');
    var option = select.options[select.selectedIndex];
    if (option.value === "all") {
        const text = ""
        search(text);
    } else {
        const text = option.text.toLowerCase()
        search(text);
    }

}

function search(value) {
    items.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(value) || 
        item.ename.toLowerCase().includes(value) || 
        item.mod.toLowerCase().includes(value)
        item.element.classList.toggle("hide", !isVisible)
    });
}


fetch("items.json")
.then(res => res.json())
.then(data => {
    items = data.map(item => {
    const card = itemCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    const mod = card.querySelector("[data-mod]")
    const imgSource = card.querySelector("[data-src]");
    header.textContent = item.name
    body.textContent = item.ename
    mod.textContent = item.mod
    imgSource.src = item.pic;
    itemCardContainer.append(card)
    return{ name: item.name, ename: item.ename, mod: item.mod, element: card }
    })
})