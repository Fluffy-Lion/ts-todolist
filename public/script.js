import { ListObj } from "./Classes/ListObj.js";
import { ListTemplate } from "./Classes/ListTemplate.js";
const form = document.querySelector('.new-form');
const input = document.querySelector('#taskInput');
const priority = document.querySelector('#priority');
// exclamation mark telling ts that it does exsist
const ul = document.querySelector('ul');
console.log(form);
console.log(input);
console.log(priority);
let list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc = new ListObj(input.value, priority.value);
    list.render(doc, input.value, 'end');
});
