class BankAccount {
    public accountHolder: string;
    private balance: number;
    protected accountType: string;

    constructor(accountHolder: string, balance: number, accountType: string) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountType = accountType;
    }

    public displayDetails(): void {
        console.log("Account Holder:", this.accountHolder);
        console.log("Balance:", this.balance);
        console.log("Account Type:", this.accountType);
    }
}

const acc = new BankAccount("Oshma", 50000, "Savings");

// Accessible
console.log(acc.accountHolder);

// Not Accessible
// console.log(acc.balance);      // Error
// console.log(acc.accountType);  // Error

acc.displayDetails();