class Company{
    constructor(){
        this.departments = {};
    }
    _employeeCreator(username,salary,position,department){
        let emp = {};
        emp.username = this._inputValidator(username);
        emp.salary = this._inputValidator(salary);
        emp.position = this._inputValidator(position);
        emp.department = this._inputValidator(department);
        return emp;
    }
    _inputValidator(value){
        if(value === null || value === undefined || value === ''){
            throw new Error('Invalid input!')
        }
        if(typeof value === 'number'){
            if(value < 0){
                throw new Error('Invalid input!')
            }
        }
        return value;
    }
    addEmployee(username,salary,position,department){
        let employee = this._employeeCreator(username,salary,position,department);
        if(!this.departments.hasOwnProperty(department)){
            this.departments[department] = [];
        }
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${username}. Position: ${position}`
    }
    bestDepartment(){
        let departmentsArray = Object.values(this.departments);
        let sortedArray = departmentsArray.sort((a,b) => 
        b.reduce((acc,val) =>
        { return acc = acc + (val.salary / b.length) },0) - 
        a.reduce((acc,val) =>
        { return acc = acc + (val.salary / a.length) },0));
        let sortedEmployees = sortedArray[0].sort((a,b) => b.salary - a.salary || a.username.localeCompare(b.username));

        let returnString = `Best Department is: ${sortedArray[0][0].department}\n`;
        let averageSalary = sortedEmployees.reduce((acc,val) =>
        { return acc + (val.salary / sortedEmployees.length) },0)
        returnString += `Average salary: ${averageSalary.toFixed(2)}`
        sortedEmployees.forEach(
            x => returnString += `\n${x.username} ${x.salary} ${x.position}`);

        return returnString;
        
    }
}
// class Employee {
//     constructor(username,salary,position,department){
//         this.username = this._inputValidator(username);
//         this.salary = this._inputValidator(salary);
//         this.position = this._inputValidator(position);
//         this.department = this._inputValidator(department);
//     }
//     _inputValidator(value){
//         if(value === null || value === undefined || value === ''){
//             throw new Error('Invalid Input!')
//         }
//         if(typeof value === 'number'){
//             if(value < 0){
//                 throw new Error('Invalid Input!')
//             }
//         }
//         return value;
//     }
// }

//Test Cases
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
