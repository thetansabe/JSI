//// SPLIT
//1) Viet ham return so chu trong cau sau
//Input: "The quick brown fox jumps over the lazy dog."
//Output: 9
// const str = 'The-quick-brown-fox-jumps over the lazy dog.';

// const words = str.split('-');

// console.log(words);
// //1') Join the string with ","
// console.log(words.join('.'));

//2)
// const sentence = '10cm+20cm=30cm';
//OUTPUT: 30 -> integer
// const sentence = '10cm+20cm=30cm';
// const words = sentence.split('=');
// const right = words[1];
// console.log(right);
// const target = right.split('cm');
// console.log(target);
// const result = parseInt(target[0]);
// console.log(result);

//3) '30,000vnd' -> integer:30000
const str = '30,000vnd';
const words = str.split('vnd');
const left = words[0].split(',');
const numberStr = left.join('') + 10;
console.log(numberStr);
const final = parseInt(numberStr) + 10;
console.log(final);
