class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this._name = this.validateName(name);
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate);
    }

    validateName(name) {
        const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;
        if(!nameRegex.test(name)) {
            throw new Error("Invalid Name: Must start with an uppercase letter and have at least 3 characters.");
        }
        return name;
    }

    //gettters and setters
    get name() {
        return this._name;
    }

    set name(name){
        this._name = this.validateName(name);
    }

    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
    }
}

try {
    //Valid names
    let emp1 = new EmployeePayroll(101, "John Doe", 50000, "M", "2024-01-01");
    console.log(emp1.toString());

    let emp2 = new EmployeePayroll(102, "Aditi Rai", 75000, "F","2025-03-04");
    console.log(emp2.toString());

    //Invalid name
    let emp3 = new EmployeePayroll(103, "john", 45000, "M", "2023-08-01");
} catch (error) {
    console.error(error.message);
}