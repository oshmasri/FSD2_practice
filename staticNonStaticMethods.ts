class Student {
    static collegeName: string = "ABC Engineering College";

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }

    static displayCollege(): void {
        console.log("College Name:", Student.collegeName);
    }
}

// Create objects
let student1 = new Student("John", 20);
let student2 = new Student("Alice", 21);

student1.displayDetails();
student2.displayDetails();

// Access static property and method
console.log(Student.collegeName);
Student.displayCollege();