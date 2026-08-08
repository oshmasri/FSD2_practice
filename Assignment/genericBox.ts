class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Value:", this.value);
    }
}

// Number
let numberBox = new Box<number>(100);
numberBox.display();

// String
let stringBox = new Box<string>("Hello");
stringBox.display();

// Boolean
let booleanBox = new Box<boolean>(true);
booleanBox.display();