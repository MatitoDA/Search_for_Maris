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

/** Listening to the input in the searchbar, and then it is looping through all items and checking if the input is included
 in the name, ename or mod of the item. If it is, the item is visible, if not, it is hidden. */
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    items.forEach(item => {
        const isVisible =
            item.name.toLowerCase().includes(value) ||
            item.ename.toLowerCase().includes(value) ||
            item.mod.toLowerCase().includes(value)
        item.element.classList.toggle("hide", !isVisible) /* Toggling the class "hide" for all items that are not matching the input. */
    })
})

/**
 * It takes the value of the selected option in the dropdown menu and uses it to filter the list of projects
 */
function update() {
    const select = document.getElementById('filter');
    const option = select.options[select.selectedIndex];
    console.log(select.options)
    if (option.value === "all") {
        const text = ""
        search(text);
    } else {
        const text = option.text.toLowerCase()
        search(text);
    }
}

/**
 * The function takes a value as an argument and loops through all items. It then checks if the value is included in the
 * name, ename or mod of the item. If it is, the item is visible, if not, it is hidden
 */
const search = value => {
    items.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(value) ||
            item.ename.toLowerCase().includes(value) ||
            item.mod.toLowerCase().includes(value)
        item.element.classList.toggle("hidemod", !isVisible) /* Toggling the class "hidemod" for all items that are not matching the input. */
    });
};

/** Fetching the mods.json file, and then it is creating a new option for each mod in the json file. */
fetch("mods.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(mods => {
            document.getElementById("filter").append(new Option(mods.modName, mods.optionValue)) 
        })
    })

/** Fetching the items.json file, and then it is creating a card for each item in the json file. */
fetch("items.json")
    .then(res => res.json()) /* import items.json */
    .then(data => {
        items = data.map(item => {
            const card = itemCardTemplate.content.cloneNode(true)["children"][0]
            card.querySelector("[data-header]").textContent = item.name
            card.querySelector("[data-body]").textContent = item.ename
            card.querySelector("[data-mod]").textContent = item.mod
            card.querySelector("[data-src]").src = item.pic 
            card.querySelector("[data-link]").href = item.pic 
            itemCardContainer.append(card)
            return{name : item.name, ename: item.ename, mod: item.mod, element: card} /* Returning the content of the created divs. */
        })
    })