class Student {
    constructor(
        public name: string,
        public age: number,
        public rollNo: number
    ) {}

    displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Roll No:", this.rollNo);
    }
}

let student1 = new Student("John", 20, 101);
student1.displayDetails();