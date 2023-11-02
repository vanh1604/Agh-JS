const radius = parseFloat(prompt("Nhập bán kính của hình tròn:"));
const area = Math.PI * Math.pow(radius, 2);
console.log(`Diện tích của hình tròn là: ${area}`);

const numbers = [5, 3, 9, 1, 7, 2];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(`Giá trị lớn nhất là: ${max}`);
console.log(`Giá trị nhỏ nhất là: ${min}`);

const base = parseFloat(prompt("Nhập số cơ sở:"));
const exponent = parseInt(prompt("Nhập số mũ:"));
const result = Math.pow(base, exponent);
console.log(`Kết quả của ${base}^${exponent} là: ${result}`);

const decimalNumber = 4.56;
const roundedNumber = Math.round(decimalNumber);
console.log(`Số sau khi làm tròn là: ${roundedNumber}`);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const num1 = parseInt(prompt("Nhập số nguyên dương:"));
const result1 = factorial(num);
console.log(`Giai thừa của ${num} là: ${result}`);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const num = parseInt(prompt("Nhập số nguyên dương:"));
const result2 = factorial(num);
console.log(`Giai thừa của ${num} là: ${result}`);

const decimalNumber1 = 4.56;
const roundedUp = Math.ceil(decimalNumber);
const roundedDown = Math.floor(decimalNumber);
console.log(`Số nguyên gần nhất lớn hơn là: ${roundedUp}`);
console.log(`Số nguyên gần nhất nhỏ hơn là: ${roundedDown}`);

const length = parseFloat(prompt("Nhập chiều dài của hình chữ nhật:"));
const width = parseFloat(prompt("Nhập chiều rộng của hình chữ nhật:"));

const perimeter = 2 * (length + width);
const areaRectangle = length * width;

console.log(`Chu vi của hình chữ nhật là: ${perimeter}`);
console.log(`Diện tích của hình chữ nhật là: ${area}`);

const numbersArray = [5, 3, 9, 1, 7, 2];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const average = sum / numbers.length;

console.log(`Tổng của dãy số là: ${sum}`);
console.log(`Trung bình của dãy số là: ${average}`);
