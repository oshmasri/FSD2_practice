"use strict";
class Student {
    id;
    name;
    constructor(id, name) {
        // Default Constructor Logic
        if (id === undefined && name === undefined) {
            this.id = 0;
            this.name = "Unknown";
        }
        // Parameterized Constructor Logic
        else {
            this.id = id;
            this.name = name;
        }
    }
    display() {
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
