import { ListObj } from "./Classes/ListObj.js"
import { ListTemplate } from "./Classes/ListTemplate.js"

const form = document.querySelector('.new-form') as HTMLFormElement
const input = document.querySelector('#taskInput') as HTMLInputElement
const priority = document.querySelector('#priority') as HTMLSelectElement
// exclamation mark telling ts that it does exsist
const ul = document.querySelector('ul')!
console.log(form)
console.log(input)
console.log(priority)

let list = new ListTemplate(ul)
form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    
    let doc = new ListObj(input.value, priority.value)
    list.render(doc, input.value, 'end')

})