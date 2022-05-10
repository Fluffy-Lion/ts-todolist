export class ListObj {
    constructor(
        readonly task: string,
        readonly priority: string,
    ){}
    output(){
        return `this task has a priority level of... \n 
                 ${this.priority}`
    }
    
}