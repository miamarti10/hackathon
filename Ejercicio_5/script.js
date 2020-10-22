


let addButton = document.getElementById('addButton');
let keywordElement= document.getElementById('value');
let valElement = document.getElementById ("value");
 
addButton.addEventListener('click', callback_addButton);

function callback_addButton() {
    localStorage.setItem(keywordElement.value, valElement.value);
}