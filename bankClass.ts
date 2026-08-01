class BankAccount {
    constructor(
        public accountHolder: string,
        public balance: number
    ) {}

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log(`Balance: ₹${this.balance}`);
    }
}

let account = new BankAccount("John", 5000);

account.deposit(1000);
account.withdraw(500);
account.displayBalance();