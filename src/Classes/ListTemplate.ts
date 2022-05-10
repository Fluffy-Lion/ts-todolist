import { ListObj } from "./ListObj.js"

export class ListTemplate {
    constructor(private container: HTMLUListElement){}
    render(item: ListObj, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li')
        li.classList.add(item.priority)
        const h4 = document.createElement('h4')

        h4.innerText = heading

        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.output()
        li.append(p)
        this.container.append(li)
    }
}