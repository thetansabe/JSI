//1) callback la gi?
// document.
//   querySelector('.btn').
//   addEventListener('click', () => {
//     const email = emailInput.value;
//     const password = passwordInput.value;

//     if (handleEmail(email) == true && handlePassword(password) == true) {
//       window.location.href = '../main/main.html';
//     }
// });

//2) bai tap van dung callback?
//[87, 42, 15, 69, 2, 54, 78, 33, 91, 10, 27, 8, 59, 97, 51]
//VIET HAM THUC HIEN CAC YEU CAU SAU:
//Filter
//a) In ra mang con chua cac so le
// function odd(arr){
//   let tmp = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0)
//       tmp.push(arr[i]);
//   }
//   return tmp;
// }
// //b) In ra mang con chua cac so chan
// function even(arr){
//   let tmp = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0)
//       tmp.push(arr[i]);
//   }
//   return tmp;
// }
const origin = [87, 42, 15, 69, 2, 54, 78, 33, 91, 10, 27, 8, 59, 97, 51];
//B1: nhung cai nao chung, viet truoc
//B2: cho nao logic rieng, truyen callBack
//B3: truyen gia can xu li vao callBack (chinh la number)
const filter = (callBack) => {
  let arr = [];
  for(let number of origin){
    if(callBack(number)){
      arr.push(number);
    }
  }
  return arr;
}

//B1: vi filter la ham co return, nen phai khai bao bien
//B2: vi dinh nghia cua filter co 1 tham so callBack
//=> phai truyen callBack vao
//B3: dung callBack de xu li logic rieng
const cauA = filter(
  (number) => {return number % 2 === 0}
)

const cauB = filter(
  (number) => {return number % 2 === 1}
)

console.log(cauA);
console.log(cauB);



//Nhận xét: filter là lọc, chính vì thế, mảng kết quả sau khi lọc có:
//số phần tử <= số phần tử mảng gốc
// function filter(arr, callBackCondition) {
//   let tmp = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callBackCondition(arr[i])) tmp.push(arr[i]);
//   }
//   return tmp;
// }

// const even = filter(origin, (a) => {
//   return a % 2 === 0;
// });

// const odd = filter(origin, (a) => {
//   return a % 2 !== 0;
// });

// console.log(even);

//Mapping:
//a) Viết hàm in ra mảng chứa các số gấp đôi các phần tử của mảng origin
// function double(origin) {
//   let tmp = []; //temporary: tam thoi
//   for (let i = 0; i < origin.length; i++) {
//     tmp.push(origin[i] * 2);
//   }
//   return tmp;
// }
// //b) Viết hàm in ra mảng chứa các số + 2 các phần tử của mảng origin
// function plusTwo(origin) {
//   //Your code
// }

//c) Qua hai hàm double và plusTwo, nhận ra điểm tương đồng, 
//sử dụng kĩ thuật callback để thu gọn, tái sử dụng hàm
//Ta đặt tên nó là map vì:
//Các phần tử gốc: [87, 42, 15, 69, 2, ...]
//Sau khi cộng 2:  [89, 44, 17, 71, 4, ...]
//Ta có nhận xét: mỗi phần tử của mảng đều được map (chuyển đổi) thành một giá trị khác theo cùng một quy luật
//nên tổng số phần tử sau khi map đều được bảo tồn.
function map(orgin, callBackOperation){
  //callBackOperation: hàm callback chứa logic phép toán (cộng 2, nhân 2, ...)
}


//Reduce:
//a) Viết hàm trả vể tổng các phần tử trong mảng
function sumArray(origin){
  //Your code
}
//b) Viết hàm trả về tích các phần tử trong mảng
function productArray(origin){
  //Your code
}
//c) Vì từ một mảng có nhiều phần tử, 
//nhưng kết quả trả về chỉ là 1 số (tổng, tích)
//nên ta sẽ đặt tên nó là reduce.
//Từ những cái chung của sumArray và productArray,
//hãy viết gọn lại thành hàm reduce sử dụng callback
function reduce(origin, callBackOperation, initValue){
  for(let i = 0; i < origin.length; i++){
    initValue = callBackOperation(origin[i], initValue);
  }

  return initValue;
}

// const reduceA = reduce(
//   origin, 
//   (a,b) => {return a+=b},
//   0);

// console.log(reduceA);

//CHALLANGE 1:
//#region challenge
const twoD=[[1, 2], [3, 4], [5, 6]];
const oneD = reduce(
  twoD,
  (childArr, initArr)=>{
    for(let item of childArr){
      initArr.push(item)
    }
    return initArr;
  },
  []
)

// console.log(oneD);
//#endregion