function timMinMax(mangSo) {
  let min = mangSo[0];
  let max = mangSo[0];

  for (let i = 1; i < mangSo.length; i++) {
    if (mangSo[i] < min) {
      min = mangSo[i];
    } else if (mangSo[i] > max) {
      max = mangSo[i];
    }
  }

  return { min, max };
}

// Ví dụ sử dụng
const mangSo = [5, 2, 4, 1, 3];
const { min, max } = timMinMax(mangSo);
console.log("Giá trị nhỏ nhất:", min);
console.log("Giá trị lớn nhất:", max);

//bai2
function tinhTong(mangSo) {
  let tong = 0;

  for (const so of mangSo) {
    tong += so;
  }

  return tong;
}

// Ví dụ sử dụng
const mangSo = [5, 2, 4, 1, 3];
const tong = tinhTong(mangSo);
console.log("Tổng các phần tử:", tong);

//bai3
// Hàm đếm số lượng phần tử lớn hơn giá trị xác định
function countElementsGreaterThan(arr, value) {
  // Sử dụng phương thức filter để tạo mảng mới chỉ chứa các phần tử lớn hơn giá trị xác định
  const filteredArray = arr.filter(element => element > value);
  // Trả về độ dài của mảng đã lọc
  return filteredArray.length;
}

// Ví dụ mảng số nguyên
const numbers = [1, 5, 8, 10, 3, 12, 7, 4];

// Giá trị do người dùng nhập vào
const userValue = 5;

// Gọi hàm và in ra kết quả
const count = countElementsGreaterThan(numbers, userValue);
console.log(`Số lượng phần tử lớn hơn ${userValue} là: ${count}`);


//bai4
function timChan(mangSo) {
  const mangChan = [];

  for (const so of mangSo) {
    if (so % 2 === 0) {
      mangChan.push(so);
    }
  }

  return mangChan;
}

// Ví dụ sử dụng
const mangSo = [5, 2, 4, 1, 3];
const mangChan = timChan(mangSo);
console.log("Mảng các phần tử chẵn:", mangChan);

//bai5
function findUniqueElements(array) {
  const uniqueElements = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueElements.includes(array[i])) {
      uniqueElements.push(array[i]);
    }
  }
  return uniqueElements;
}

// Ví dụ sử dụng
const array = [1, 2, 3, 1, 2, 4, 5, 6, 5, 7];

const uniqueElements = findUniqueElements(array);
console.log(`Mảng mới chứa các phần tử không trùng lặp là: ${uniqueElements}`);

//bai6
function sapXep(mangSo) {
  for (let i = 0; i < mangSo.length; i++) {
    for (let j = i + 1; j < mangSo.length; j++) {
      if (mangSo[i] > mangSo[j]) {
        const temp = mangSo[i];
        mangSo[i] = mangSo[j];
        mangSo[j] = temp;
      }
    }
  }

  return mangSo;
}

// Ví dụ sử dụng
const mangSo = [5, 2, 4, 1, 3];
const mangSapXep = sapXep(mangSo);
console.log("Mảng đã sắp xếp:", mangSapXep);

//bai7
function countOccurrences(array, value) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      count++;
    }
  }
  return count;
}

// Ví dụ sử dụng
const array = [1, 2, 3, 4, 1, 2, 3, 4, 5];
const value = 3;

const count = countOccurrences(array, value);
console.log(`Số lần xuất hiện của ${value} trong mảng là: ${count}`);

//bai8
function findPrimes(array) {
  const primes = [];
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Ví dụ sử dụng
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const primes = findPrimes(array);
console.log(`Các số nguyên tố trong mảng là: ${primes}`);

//bai9
function ghepMang(mang1, mang2) {
  const mangGhep = mang1.slice(); // Tạo bản sao của mang1
  mangGhep.push(...mang2); // Nối mảng2 vào cuối mangGhep
  return mangGhep;
}

// Ví dụ sử dụng
const mang1 = [5, 2, 4];
const mang2 = [1, 3, 7];
const mangGhep = ghepMang(mang1, mang2);
console.log("Mảng sau khi ghép:", mangGhep);

//abi10
function timPhanTuLonThuHai(mangSo) {
  if (mangSo.length < 2) {
    throw new Error("Mảng phải có ít nhất 2 phần tử");
  }

  let lonThuHai = mangSo[0];
  for (let i = 1; i < mangSo.length; i++) {
    if (mangSo[i] > lonThuHai && mangSo[i] !== mangSo[0]) {
      lonThuHai = mangSo[i];
    }
  }

  return lonThuHai;
}

// Ví dụ sử dụng
const mangSo = [2, 2, 4, 1, 3];
const lonThuHai = timPhanTuLonThuHai(mangSo);
console.log("Phần tử lớn thứ hai:", lonThuHai);
