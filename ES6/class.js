// classes and inherittence in es6:

class Person {
    static count = 0;
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        Person.count += 1;
    }
}

let person1 = new Person('Junior', 12);
let person2 = new Person('hirwa', 23);
let person3 = new Person('Irene', 23);
console.log(person1);
console.log(person2);
console.log(person3);
console.log(Person.count);

// Book Account class:
class BankAccount {
    constructor(_accountNumber, _balance) {
        this.account = _accountNumber;
        this.balance = _balance;
    }
    deposit(amount) {
        return `you have deposited $${amount} and the total balance now is $${this.balance + amount}`;
    }
    display() {
        return `account: ${this.account} has $${this.balance} balance`
    }
    withdraw(amount) {
        return `you have withdrawn ${amount} and the remaining balance is $${this.balance - amount}`;
    }
}

let account1 = new BankAccount('12344', 1234);
console.log(account1.display());
console.log(account1.deposit(1000));
console.log(account1.display());
