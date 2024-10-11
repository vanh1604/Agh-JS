const arrayNumber = [1, 2, 3, 43];
arrayNumber.map((index) => {
  console.log(index * 2);
});

console.log(arrayNumber.reduce((acc, curr) => acc + curr, 10));
const arrayPerson = [
  {
    name: "John",
    age: 16,
    gmail: "a@a.com",
  },
  {
    name: "hosue",
    age: 30,
    gmail: "a@a.com",
  },
  {
    name: "dome",
    age: 45,
    gmail: "a@a.com",
  },
  {
    name: "dome",
    age: 45,
    gmail: "a@a.com",
  },
  {
    name: "dome",
    age: 45,
    gmail: "a@a.com",
  },
];
let tong = 0;
for (let index = 0; index < arrayPerson.length; index++) {
  const element = arrayPerson[index];
  tong += element.age;
}
console.log(tong / arrayPerson.length);
