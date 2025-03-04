class EmployeePayroll {

    //property
    id;
    salary;
    name;

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
    }

    //getters and setters
    get name(){ return this._name};
    set name(name) {this._name = name};
}

let employeePayrollData = new EmployeePayroll(1, "Abhay Shrivastava", 20000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John Doe";
console.log(employeePayrollData.toString());