// Question number 1
// let num1 = +prompt("enter first number");

// let num2 = +prompt("enter second number");

// let largeNum = num1 > num2 ? num1:num2;

// console.log("the large number is " + largeNum);

// 2nd Question
// let num = prompt("Enter a number")

// if (num > 0){
//     alert("The sign is +");
// }
// else if (num < 0){
//     alert("The sign is -");
// }
// else {
//     alert("The number is zero");
// }

// //3rd question
// let num1 = +prompt ("enter first number: ");
// let num2 = +prompt ("enter second number: ");
// let num3 = +prompt ("enter third number: ");
// let num4 = +prompt ("enter fourth number: ");
// let num5 = +prompt ("enter fifth number: ");

// let max = num1;
// if( num2 > max){
//     max = num2;
// }
//  if (num3 >max ){
//     max = num3
// }
//  if(num4 > max  ){
//     max = num4
// }
//  if(num5 > max ){
//     max = num5
// }

// console.log("The large number is " + max)

//Q4
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     }
//     else {
//         console.log(i + " is odd");
//     }
// }

// for (let i = 1; i <= 6; i++){

//     let row = "";
//     for (let j=1; j<=i; j++){
//         row += "*";
//     }
//     console.log(row);
// }
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }


// . Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz"

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz")
//     }
//     else if (i % 5 === 0) {
//         console.log("Bizz")

//     }
//     else if (i % 3 === 0 && i % 5 === 0) {
//         console.log("BizzFizz")

//     }
//     else { console.log(i) }
// }

// Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A
let takeStdNo = +prompt("Enter the number")

let marks = [23,54,63,87,82];

let total = 0;

for (let i=0; i<=takeStdNo; i++){
    total = total + marks[i];
}
let averageMarks = total/takeStdNo;

let grade;
if(marks < 60){
    console.log("F")
}
else if(marks < 70){
    console.log("D")
}
else if(marks < 80){
    console.log("C")
}
else if(marks <90){
    console.log("B")
}
else {
    console.log("A")
}
console.log("The average mark is" + averageMarks.toFixed(2)+ "grade")