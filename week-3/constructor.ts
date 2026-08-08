class Student {
    id: number;
    name: string;

    // Constructor Overloading
    constructor();
    constructor(id: number, name: string);
    constructor(id?: number, name?: string) {

        // Default Constructor Logic
        if (id === undefined && name === undefined) {
            this.id = 0;
            this.name = "Unknown";
        }

        // Parameterized Constructor Logic
        else {
            this.id = id!;
            this.name = name!;
        }
    }

    display(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("----------------");
    }
}

// Default Constructor
const s1 = new Student();
s1.display();

// Parameterized Constructor
const s2 = new Student(101, "Oshma");
s2.display();