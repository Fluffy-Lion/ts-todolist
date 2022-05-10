export class ListObj {
    constructor(task, priority) {
        this.task = task;
        this.priority = priority;
    }
    output() {
        return `this task has a priority level of... \n 
                 ${this.priority}`;
    }
}
