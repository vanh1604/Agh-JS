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
function kiemTraSNT(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
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
