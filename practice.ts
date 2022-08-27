
/* -----------------  Problem no:1----------------------------
Create a function that returns each character of a string
--------------------------------------------------------------*/

//  function newFunc() {
//     const newStr = 'This is a string'
//     const result = newStr.split('')
//     return result
// }
// console.log('Problem no - 01', newFunc())








/* -----------------  Problem no:2-----------------------------
Returns 5 times a given number
--------------------------------------------------------------*/

// function multiply(num: number) {
//     const res = num * 5
//     return res
// }
// console.log('Problem no - 02', multiply(10))









/* -----------------  Problem no:3-----------------------------
Creates an array from each element of a string
--------------------------------------------------------------*/

// function myFunction() {
//     const name = 'Mohidul islam'
//     const newArr: string[] = []
//     for (let i = 0; i < name.length; i++) {
//         newArr.push(name[i])
//     }
//     const ok = newArr.filter(n => n !== ' ')

//     return ok;
// }
// console.log('Problem no - 03', myFunction())









/* -----------------  Problem no:4-----------------------------
Create an object class that has pay and receive method that sends
and receives money in a given bank account
--------------------------------------------------------------*/

// class BankAccount {

//     pay: number;
//     received: number;

//     constructor(pay: number, received: number) {

//         this.pay = pay;
//         this.received = received;

//     }
//     totalMoneyAfterPayment(tk: number) {
//         return this.pay = this.pay + tk;
//     }
//     existingMoneyAfterReceived(tk: number) {
//         return this.pay = this.received - tk;

//     }
// }


// const newAccount = new BankAccount(500, 200)

// const newBalance = newAccount.totalMoneyAfterPayment(100)

// console.log('Problem no - 04', newBalance)











/* -----------------  Problem no:5-----------------------------
Write a program that prints ‘Hello World’ to the screen
--------------------------------------------------------------*/



// document.write('Hello world')






/* ---------------------- Problem no:6-------------------------
Write a program that asks the user for their name and greets them
with their name
--------------------------------------------------------------*/


// const yourName: string | null = window.prompt("Enter your name: ");

// if (!yourName) {
//     alert('Please enter a Name');
// }

// if (yourName) {
//     alert("Welcome Mr. " + yourName + ' to our awesome website');
// }







/* ------------------------- Problem no:7-------------------------
Modify the previous program such that only the users Alice and Bob
 are greeted with their names
-----------------------------------------------------------------*/




// alert('Hello I am Alice ')
// alert('Hello I am Bob ')

/* ------------------------- Problem no:8-------------------------
Write a program that asks the user for a number n and prints the
 sum of the numbers 1 to n
-----------------------------------------------------------------*/

// const n: string | null = prompt('Enter a digit')

// if (n) {
//     const result = parseInt(n) + 1
//     alert (`Your result is ${result}`)

// }







/* ------------------------- Problem no:10-------------------------
Write a function that returns the largest element in a list.
-----------------------------------------------------------------*/



// function getMaximumNumber() {
//     const array1 = [1, 3, 2];

// const maximumNumber = Math.max(...array1);
// return maximumNumber ;
// }
// getMaximumNumber()









/* ------------------------- Problem no:11-------------------------
Problem -11 Write function that reverses a list, preferably in place.
-----------------------------------------------------------------*/


// function getReverseArray(){
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const reverseArray = fruits.reverse();

// return reverseArray ;
// }

// getReverseArray()







/* ------------------------- Problem no:12-------------------------
Write a function that checks whether an element occurs in
 a list.
-----------------------------------------------------------------*/

// function isExistElement( params:string):boolean {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  return fruits.includes("Apple");
// }
// isExistElement('Jackfruit')









/* ------------------------- Problem no:13-------------------------
Write a function that returns the elements on odd positions
in a list.
-----------------------------------------------------------------*/
 

// function getOddNumber() {

//     var array: number[] = [1, 2, 3, 4, 5];
//     const result = array.filter((elm) => {
//         const oddNumbersArray: number[] = []
//         if (elm % 2 != 0) {
//         oddNumbersArray.push(elm);
//         return oddNumbersArray
//         } 

//     })

//     return result
// }

// console.log(getOddNumber())
