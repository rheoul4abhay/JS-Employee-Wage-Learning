class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate);
    }

    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
    }
}

let emp1 = new EmployeePayroll(101, "John Doe", 50000, "M", "2024-01-01");
let emp2 = new EmployeePayroll(102, "Aditi Rai", 75000, "F","2025-03-04");

console.log(emp1.toString());
console.log(emp2.toString());