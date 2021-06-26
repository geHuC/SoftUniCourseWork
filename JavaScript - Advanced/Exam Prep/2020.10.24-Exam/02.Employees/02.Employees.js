function solveClasses() {
    class Developer{
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }
        addTask(id, taskName, priority){
            let taskObj = {
                id,
                name: taskName,
                priority
            }
            if(priority === 'high'){
                this.tasks.unshift(taskObj);
            }else{
                this.tasks.push(taskObj);
            }
            return `Task id ${id}, with ${priority} priority, has been added.`
        } 
        doTask(){
            if(this.tasks.length === 0){
                return `${this.firstName}, you have finished all your tasks. You can rest now.`;
            }
            if(this.tasks[0].priority === 'high'){
                return this.tasks.shift().name;
            }else{
                return this.tasks.pop().name;
            }
        }
        getSalary(){
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }
        reviewTasks(){
            let toReturn = ['Tasks, that need to be completed:'];
            this.tasks.forEach(x => toReturn.push(`${x.id}: ${x.name} - ${x.priority}`));
            return toReturn.join('\n');
        }
    }
    class Junior extends Developer{
        constructor( firstName, lastName, bonus, experience ){
            super(firstName,lastName);
            this.baseSalary += bonus;
            this.experience += experience;
        }
        learn( years ){
            this.experience += years;
        }
    }
    class Senior extends Developer{
        constructor( firstName, lastName, bonus, experience ){
            super(firstName,lastName);
            this.baseSalary += bonus;
            this.experience += experience + 5;
        }
        changeTaskPriority(taskId){
            let task = this.tasks.find(x => x.id === taskId);
            this.tasks = this.tasks.filter(x => x.id !== taskId);
            if(task.priority === 'high'){
                task.priority = 'low';
                this.tasks.push(task);
            }else{
                task.priority = 'high';
                this.tasks.unshift(task);
            }
            return task;
        } 
    }
    return {
        Developer,
        Junior,
        Senior
    }
}

//test cases
let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);