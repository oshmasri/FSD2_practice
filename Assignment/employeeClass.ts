class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public displayEmployee(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Department:", this.department); // Accessible
    }
}

let emp = new Employee("John", 50000, "IT");

// Public member can be accessed directly
console.log(emp.name);

// Private member cannot be accessed
// console.log(emp.salary); // Error

// Protected member cannot be accessed outside the class
// console.log(emp.department); // Error

emp.displayEmployee();

let manager = new Manager("Alice", 80000, "HR");
manager.showDepartment();