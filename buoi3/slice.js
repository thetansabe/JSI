const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

//1) splice(from)
//OUT: ["camel", "duck", "elephant"]

//2) splice(from, to-1)
//OUT: ["camel", "duck"]

//3) splice(-from)
//OUT: ["duck", "elephant"]

//4) splice(from,-to)
//OUT: ["camel", "duck"]


const strArr = ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
//1) remove 'adieu', 'cafe'

//2) xoa het chi de lai 'eclair'
console.log(strArr.slice(3,4));

//2') remove 'eclair'

//3) xoa het chi de lai 'eclair', 'premier'
console.log(strArr.slice(3,5));
//4) xoa het chi de lai 'reserve'