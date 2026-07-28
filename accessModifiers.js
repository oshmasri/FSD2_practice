"use strict";
class BankAccount {
    accountHolder;
    balance;
    accountType;
    constructor(accountHolder, balance, accountType) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountType = accountType;
    }
    displayDetails() {
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
