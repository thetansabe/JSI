//1) Sử dụng map() 
//với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
const arr1 = [1,54,6,7]
const cau1 = arr1.map((number) => {return number + 5})
console.log(cau1);

//2) sử dụng map()
//với const names = ['john', 'mary', 'jane', 'joe'];
//tao ra array in hoa ten: Output: ['JOHN', 'MARY', 'JANE', 'JOE']
const names = ['john', 'mary', 'jane', 'joe'];
const cau2 = names.map((name) => { return name.toUpperCase()} )
console.log(cau2);

//3) su dung map()
//const strings = ['apple', 'banana', 'cherry'];
//in ra do dai chuoi: Output: [5, 6, 6]

//4) su dung map() --challenge
//const strings = ['apple', 'banana', 'cherry'];
//dao nguoc chuoi: Output: ['elppa', 'ananab', 'yrrehc']

//#region
const strings = ['apple', 'banana', 'cherry'];

const cau4 = strings.map(str => {
    let newStr = ''
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
})

console.log(cau4);
//#endregion