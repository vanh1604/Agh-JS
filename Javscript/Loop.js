// //b1
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }
// //b2
// var n = prompt("Nhập một số nguyên dương: ");
// var sum = 0;

// for (var i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log("Tổng các số từ 1 đến " + n + " là: " + sum);
// //b3
// for (var i = 1; i <= 9; i++) {
//   for (var j = 1; j <= 9; j++) {
//     console.log(i + " x " + j + " = " + i * j);
//   }
// }
// //b4
// var numbers = [5, 10, 2, 8, 1];
// var max = numbers[0];

// for (var i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log("Số lớn nhất trong mảng là: " + max);
// //b5
// var n = prompt("Nhập một số nguyên dương: ");
// var factorial = 1;

// for (var i = 1; i <= n; i++) {
//   factorial *= i;
// }

// console.log("Giai thừa của " + n + " là: " + factorial);

// //b6
// var n = prompt("Nhập một số nguyên dương: ");
// var isPrime = true;

// if (n <= 1) {
//   isPrime = false;
// } else {
//   for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(n + " là số nguyên tố.");
// } else {
//   console.log(n + " không phải là số nguyên tố.");
// }
// //b7
// var n = prompt("Nhập một số nguyên dương: ");
// var sum = 0;

// for (var i = 2; i <= n; i += 2) {
//   sum += i;
// }

// console.log("Tổng các số chẵn từ 2 đến " + n + " là: " + sum);

// //b8
// var n = prompt("Nhập một số nguyên dương: ");
// var sum = 0;

// for (var i = 2; i <= n; i += 2) {
//   sum += i;
// }

// console.log("Tổng các số chẵn từ 2 đến " + n + " là: " + sum);

// //b9
// var numbers = [7, 2, 9, 1, 6];
// var max = numbers[0];

// for (var i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log("Số lớn nhất trong mảng là: " + max);

// //b10
// var fruits = ["Táo", "Cam", "Chuối", "Dứa", "Xoài"];
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

let a = 1;
let b = 2;
let result = a + b < 5 ? console.log("đúng") : console.log("sai");

a === 1 ? console.log("hello word") : console.log("error");

var day1 = "Wednesday";

switch (day1) {
  case "monday":
    console.log("Hôm nay là thứ Hai.");
    break;
  case "Tuesday":
    console.log("Hôm nay là thứ Ba.");
    break;
  case "Wednesday":
    console.log("Hôm nay là thứ tư");
    break;
  default:
    console.log("hello word");
}
