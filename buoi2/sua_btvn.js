
//OUTPUT cua 1 ham map giu nguyen so phan tu trong mang ban dau
//cac so deu bi bien doi theo 1 quy luat

//a) mang con chua cac phan tu gap doi origin
// function double(origin) {
//   let tmp = []; //temporary: mảng tạm thời để lưu giá trị.
//   for (let i = 0; i < origin.length; i++) {
//     tmp.push(origin[i] * 2);
//   }
//   return tmp;
// }

// //b) mang con chua cac phan tu + 2 origin
// function plusTwo(origin) {
//   let tmp = []; //temporary: mảng tạm thời để lưu giá trị.
//   for (let i = 0; i < origin.length; i++) {
//     tmp.push(origin[i] + 2);
//   }
//   return tmp;
// }

// //c) Viet gon
// //B1: Nhung cai gi giong, thi ghi lai het
// //B2: doi voi logic rieng, thi truyen callBack
// function map(origin, callBack) {
//   let tmp = []; //temporary: mảng tạm thời để lưu giá trị.
//   for (let i = 0; i < origin.length; i++) {
//     tmp.push(callBack(origin[i]));
//   }
//   return tmp;
// }

// //B1: hung gia tri, va truyen callBack rong
// //B2: truyen logic va bien can xu li vao callBack

// const cauA = map(origin, (number) => { return number * 2; })
// console.log(cauA);

/////////////REDUCE
function sumArray(origin) {
  let sum = 0; //logic them 1
  for (let i = 0; i < origin.length; i++) {
    sum += origin[i]; //logic them 2
  }

  return sum;
}

function productArray(origin) {
  let product = 1;
  for (let i = 0; i < origin.length; i++) {
    product = product * origin[i];
  }
  return product;
}

const origin = [87, 42, 15, 69, 2, 54, 78, 33, 91, 10, 27, 8, 59, 97, 51];
function reduce(origin, callBack, initValue) {
  for (let i = 0; i < origin.length; i++) {
    initValue = callBack(initValue, origin[i]);
  }

  return initValue;
}

const cauA = reduce(origin, 
    (initValue, number) => { return initValue + number}, 
0)

//chi con 1 so
//NX: ket qua cua ham reduce, so phan tu bi giam di dang ke

console.log(cauA);
