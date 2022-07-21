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



searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    items.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(value) || 
        item.ename.toLowerCase().includes(value) || 
        item.mod.toLowerCase().includes(value)
        item.element.classList.toggle("hide", !isVisible)
        console.log(isVisible)
    });
})



/* function update() {
    var select = document.getElementById('filter');
    var option = select.options[select.selectedIndex];
    var text = option.text
    document.getElementById('search').value = text;
    if (option.value === "0") {
        document.getElementById('search').value = "";
        
    } else {
        if (option.value === "1") {
            
            search()
        } else {
            if (option.value === "2") {
                search()
            } else {
                if (option.value === "3") {
                    search()
                }  else {
                    if (option.value === "4") {
                        search()
                    }  else {
                        if (option.value === "5") {
                            search()
                        }  else {
                            if (option.value === "6") {
                                search()
                            }  else {
                                if (option.value === "7") {
                                    search()
                                }  else {
                                    if (option.value === "8") {
                                        search()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
update(); */

fetch("items.json")
.then(res => res.json())
.then(data => {
    items = data.map(item => {
    const card = itemCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    const mod = card.querySelector("[data-mod]")
    header.textContent = item.name
    body.textContent = item.ename
    mod.textContent = item.mod
    itemCardContainer.append(card)
    return{ name: item.name, ename: item.ename, mod: item.mod, element: card }
    })
})



function search() {
    var select = document.getElementById('filter');
    var option = select.options[select.selectedIndex];
    var text = option.text
    items.forEach(item => {
        const isVisible = item.name.toLowerCase().includes(text) || 
        item.ename.toLowerCase().includes(text) || 
        item.mod.toLowerCase().includes(text)
        item.element.classList.toggle("hide", !isVisible)
        console.log(isVisible)
    });
}

imgLoad()
function imgLoad() {
    fetch("items.json")
    .then(results => results.json())
    .then(console.log)
    .then(data => {
        items = data.map(item => {
        getElementById("crafting").src = src
        })
    })
}