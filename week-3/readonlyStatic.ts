class Employee {

    // Static Property (shared by all objects)
    static company: string = "OpenAI";

    // Readonly Property (cannot be changed after initialization)
    readonly empId: number;

    name: string;

    constructor(empId: number, name: string) {
        this.empId = empId;
        this.name = name;
    }

    display(): void {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.name);
        console.log("Company:", Employee.company);
        console.log("----------------------");
    }
}

const e1 = new Employee(101, "Oshma");
const e2 = new Employee(102, "Sri");

e1.display();
e2.display();

// Allowed
e1.name = "Anjali";

// Not Allowed
// e1.empId = 201;      // Error (readonly)

// Static property is accessed using the class name
Employee.company = "Microsoft";

e1.display();
e2.display();