const origin = [87, 42, 15, 69, 2, 54, 78, 33, 91, 10, 27, 8, 59, 97, 51];

// //a) Viết hàm in ra mảng con chứa các số gấp đôi các phần tử của mảng origin
// const double = (origin) => {
//     let tmp = []; //tmp: temporary: mang phu, mang tam thoi

//     for(let i = 0; i < origin.length; i++){
//         tmp.push(origin[i] * 2);
//     }

//     return tmp;
// }

// const cauA = double(origin)
// console.log(cauA);

// //b) Viết hàm in ra mảng chứa các số + 2 các phần tử của mảng origin
// const plusTwo = (origin) => {
//     let tmp = []; //tmp: temporary: mang phu, mang tam thoi

//     for(let i = 0; i < origin.length; i++){
//         tmp.push(origin[i] + 2);
//     }

//     return tmp;
// }

// const cauB = plusTwo(origin)
// console.log(cauB);

//c) callback de rut gon ham
//B1: nhung gi lap lai, ghi het vao
//B2: muon truyen duoc logic rieng, phai goi thong qua callBack
//B3: cho nao logic rieng, cho do' dung callBack
//B4: truyen gia tri can xu li vao callBack
const map = (origin, callBack) => {
    let tmp = [];

    for(let i = 0; i < origin.length; i++){
        tmp.push(callBack(origin[i]));
    }
    return tmp;
}

//B1: truyen callBack
//B2: 
const mapDouble = map(origin, (number) => {
    return number * 2;
})

const mapPlusTwo = map(origin, (number) => {
    return number + 2;
})

console.log(mapDouble);
console.log(mapPlusTwo);