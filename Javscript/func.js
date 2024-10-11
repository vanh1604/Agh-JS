//bai1
function timSoLonNhat(a, b) {
  return a > b ? a : b;
}

//bai2
function tinhTongSoChan(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return console.log(sum);
}

//bai3
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Sử dụng hàm kiểm tra số nguyên tố
const num = 13;
if (isPrime(num)) {
  console.log(num + " là số nguyên tố");
} else {
  console.log(num + " không phải là số nguyên tố");
}

//bai4
function kiemTraChanLe(number) {
  if (number % 2 === 0) {
    return "Số chẵn";
  } else {
    return "Số lẻ";
  }
}

//bai5
function tinhGiaiThua(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * tinhGiaiThua(n - 1);
  }
}
//bai6
function tinhLuyThua(a, b) {
  return Math.pow(a, b);
}

//bai7
function daoNguocChuoi(str) {
  return str.split("").reverse().join("");
}

//bai8
function tinhPhanTram(number, percent) {
  return (number * percent) / 100;
}

//bai9
function timUCLN(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

//bai10
function timBCNN(a, b) {
  return (a * b) / timUCLN(a, b);
}
//bai 11
function isPerfectNumber(num) {
  if (num <= 0) {
    return false; // Số không phải là số hoàn hảo nếu nhỏ hơn hoặc bằng 0
  }
  let total = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      total += i;
    }
  }
  return total === num;
}

// Kiểm tra hàm với một số nguyên
let num = 28;
console.log(isPerfectNumber(num)); // Kết quả: true

//bai 12
function findLargestFibonacciNumber(num) {
  let prev = 0;
  let curr = 1;
  let result = 0;
  while (curr <= num) {
    let next = prev + curr;
    if (next <= num) {
      result = next;
    }
    prev = curr;
    curr = next;
  }
  return result;
}

// Kiểm tra hàm với một số nguyên
let num = 20;
console.log(findLargestFibonacciNumber(num)); // Kết quả: 13
