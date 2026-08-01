class Student {
    readonly studentId: number;
    name: string;
    age: number;

    constructor(studentId: number, name: string, age: number) {
        this.studentId = studentId;
        this.name = name;
        this.age = age;
    }

    displayDetails(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

// Example
let student = new Student(101, "John", 20);

student.displayDetails();

//Error: Cannot assign to 'studentId' because it is a read-only property.
// student.studentId = 102;