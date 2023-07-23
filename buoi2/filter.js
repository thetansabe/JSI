//1) su dung filter()
//với const names = ['john', 'mary', 'jane', 'joe'];
//in ra nhung ten co 'j' trong ten
const names = ["john", "mary", "jane", "joe"];
const cau1 = names.filter((name) => {
  return name.includes("j");
});
console.log(cau1);
//2) su dung filter()
//Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1,6,8,9,0].
//Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên
const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];

const cau3 = arr1.filter((number) => {
  return arr2.includes(number);
});
console.log(cau3);

//cho mang sau
let students = [
  {
    name: "Duong",
    age: 11,
    hobbies: ["video game", "sleep", "learn"],
  },
  {
    name: "Dong",
    age: 12,
    hobbies: ["video game", "sick", "study"],
  },
  {
    name: "Minh",
    age: 13,
    hobbies: ["video game", "sick", "learn"],
  },
  {
    name: "Thanh",
    age: 9,
    hobbies: ["play game", "sleep", "learn"],
  },
  {
    name: "Hung",
    age: 11,
    hobbies: ["play game", "sick", "study"],
  },
];

//FILTER
//3) su dung filter()
//Tao mang teenagers chua nhung student >= 12 tuoi
//4) su dung mang students phia tren
//Tao mang learners chua nhung student co hoobie la "learn"
