let num1 = parseInt(prompt("Nhập số thứ nhất: "));
let num2 = parseInt(prompt("Nhập số thứ hai: "));
let num3 = parseInt(prompt("Nhập số thứ ba: "));

if (num1 >= num2 && num1 >= num3) {
  console.log("Số lớn nhất là: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log("Số lớn nhất là: " + num2);
} else {
  console.log("Số lớn nhất là: " + num3);
}

//b2
let num4 = parseInt(prompt("Nhập một số: "));

if (num4 > 0) {
  console.log(num4 + " là số dương.");
} else if (num < 0) {
  console.log(num4 + " là số âm.");
} else {
  console.log(num4 + " bằng 0.");
}

//b3
let num = parseInt(prompt("Nhập một số: "));

if (num % 2 === 0) {
  console.log(num + " là số chẵn.");
} else {
  console.log(num + " là số lẻ.");
}

//b4
let diem = parseFloat(prompt("Nhập điểm của học sinh: "));

if (diem >= 9) {
  console.log("Xuất sắc");
} else if (diem >= 8) {
  console.log("Giỏi");
} else if (diem >= 7) {
  console.log("Khá");
} else if (diem >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu kém");
}

//b5
let num1 = parseInt(prompt("Nhập số thứ nhất: "));
let num2 = parseInt(prompt("Nhập số thứ hai: "));
let num3 = parseInt(prompt("Nhập số thứ ba: "));

if (num1 <= num2 && num1 <= num3) {
  console.log(num1);
  if (num2 <= num3) {
    console.log(num2);
    console.log(num3);
  } else {
    console.log(num3);
    console.log(num2);
  }
} else if (num2 <= num1 && num2 <= num3) {
  console.log(num2);
  if (num1 <= num3) {
    console.log(num1);
    console.log(num3);
  } else {
    console.log(num3);
    console.log(num1);
  }
} else {
  console.log(num3);
  if (num1 <= num2) {
    console.log(num1);
    console.log(num2);
  } else {
    console.log(num2);
    console.log(num1);
  }
}

//b6
let year = parseInt(prompt("Nhập một năm: "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " là năm nhuận.");
} else {
  console.log(year + " không phải là năm nhuận.");
}

//b7
let a = parseFloat(prompt("Nhập độ dài cạnh a: "));
let b = parseFloat(prompt("Nhập độ dài cạnh b: "));
let c = parseFloat(prompt("Nhập độ dài cạnh c: "));

if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
  console.log("Ba cạnh này không tạo thành một tam giác.");
} else if (a === b && b === c) {
  console.log("Tam giác đều.");
} else if (a === b || b === c || a === c) {
  console.log("Tam giác cân.");
} else if (
  a * a === b * b + c * c ||
  b * b === a * a + c * c ||
  c * c === a * a + b * b
) {
  console.log("Tam giác vuông.");
} else {
  console.log("Tam giác thường.");
}
//b8
var month = parseInt(prompt("Nhập tháng (1-12): "));

if (month >= 1 && month <= 12) {
  switch (month) {
    case 1:
    case 2:
    case 12:
      console.log("Mùa đông");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Mùa xuân");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Mùa hè");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Mùa thu");
      break;
  }
} else {
  console.log("Tháng không hợp lệ.");
}

//b9
var character = prompt("Nhập một ký tự: ");

if (character.length === 1 && character.match(/[a-zA-Z]/)) {
  console.log(character + " là một chữ cái.");
} else {
  console.log(character + " không phải là một chữ cái.");
}
