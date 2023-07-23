//// ARRAY SPREAD
// let a = 1
// let b = a
// b = 0
// console.log(a);

//0) Copy array problem
const arr = [1,2,3]
const arr1 = [...arr];

arr1[0] = 100
// console.log(arr);
// console.log(arr1);
//1) Them 1 phan tu vao array
//console.log([...arr1,100]);


//2) Tron 2 array
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // Output: ['a', 'b', 'c', 'd', 'e', 'f']


function mergeArrays(arr1, arr2){
    return [...arr1,...arr2]
}
// Chu y' khi merge 2 mang co' phan tu trung nhau