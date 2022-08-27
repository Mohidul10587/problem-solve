// Problem no:1
function newFunc() {
    var newStr = 'This is a string';
    var result = newStr.split('');
    return result;
}
console.log('Problem no - 01', newFunc());
// Problem no:2
function multiply(num) {
    var res = num * 5;
    return res;
}
console.log('Problem no - 02', multiply(10));
// Problem no:3
function myFunction() {
    var name = 'Mohidul islam';
    var newArr = [];
    for (var i = 0; i < name.length; i++) {
        newArr.push(name[i]);
    }
    var ok = newArr.filter(function (n) { return n !== ' '; });
    return ok;
}
console.log('Problem no - 03', myFunction());
// Problem no:4
var BankAccount = /** @class */ (function () {
    function BankAccount(pay, received) {
        this.pay = pay;
        this.received = received;
    }
    BankAccount.prototype.totalMoneyAfterPayment = function (tk) {
        return this.pay = this.pay + tk;
    };
    BankAccount.prototype.existingMoneyAfterReceived = function (tk) {
        return this.pay = this.received - tk;
    };
    return BankAccount;
}());
var newAccount = new BankAccount(500, 200);
var newBalance = newAccount.totalMoneyAfterPayment(100);
console.log('Problem no - 04', newBalance);
// Problem no:5
// document.write('Hello world')
// Problem no :6
// const yourName: string | null = window.prompt("Enter your name: ");
// if (!yourName) {
//     alert('Please enter a Name');
// }
// if (yourName) {
//     alert("Welcome Mr. " + yourName + ' to our awesome website');
// }
// Problem no :7 
// alert('Hello I am Alice ')
// alert('Hello I am Bob ')
//Problem no : 8
var providedNumber = prompt('Enter a digit');
if (providedNumber) {
    var result = parseInt(providedNumber) + 1;
    alert("Your result is, ".concat(result));
}
