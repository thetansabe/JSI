const numbers = [5, 2, 9, 1, 5, 6];
//1) Sap xep mang so numbers theo thu tu tang dan:
//2) Sap xep mang so numbers theo thu tu giam dan:

//=============================================================
const fruits = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
//3) Sap xep mang fruits theo thu tu tang dan:
//4) Sap xep mang fruits theo thu tu giam dan:
//goi y: search cach su dung ham reverse()

//=============================================================
const books = [
  { title: 'Book A', pages: 150 },
  { title: 'Book B', pages: 200 },
  { title: 'Book C', pages: 120 },
  { title: 'Book D', pages: 180 },
];
//6) Sap xep mang books theo thu tu so pages tang dan
//7) Sap xep mang books theo thu tu ten sach tang dan


//=============================================================
//5) Sử dụng spread để ghi lại sách mà "johndoe" đã thêm vào cart (giỏ hàng)
//OUTPUT: cart = {username: "johndoe", books: ['BookA', 'BookC']}

const reader = { username: "johndoe" };
let cart = {}
const shop1 = ['DestinationB1', 'DestinationB2']; //johndoe mua 2 cuon sach o shop1
const shop2 = ['Lift the flap', 'Sach Am thanh'];

cart = {username: {...reader}.username, books: [...shop1]};
cart.books.push(shop2[0]);
console.log(cart);
console.log(shop1);







