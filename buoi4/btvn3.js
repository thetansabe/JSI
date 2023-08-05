const numbers = [15, 2, 9, 1, 5, 6];
//1) Sap xep mang so numbers theo thu tu tang dan:
//2) Sap xep mang so numbers theo thu tu giam dan:

//=============================================================
const fruits = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
// //3) Sap xep mang fruits theo thu tu tang dan:
// fruits.sort();
// console.log(fruits);
// //4) Sap xep mang fruits theo thu tu giam dan:
// //goi y: search cach su dung ham reverse()
// fruits.reverse()
// console.log(fruits);
//=============================================================
const books = [
  { title: 'Book A', pages: 150 },
  { title: 'Book B', pages: 200 },
  { title: 'Book C', pages: 120 },
  { title: 'Book D', pages: 180 },
];
//6) Sap xep mang books theo thu tu so pages tang dan
books.sort((objTruoc, objSau) => objTruoc.pages - objSau.pages)
console.log(books);
//7) Sap xep mang books theo thu tu ten sach tang dan
books.sort((objTruoc, objSau) => {
  const nameA = objTruoc.title.toUpperCase(); // ignore upper and lowercase
  const nameB = objSau.title.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
})
console.log(books);

//=============================================================
//5) Sử dụng spread để ghi lại sách mà "johndoe" đã thêm vào cart (giỏ hàng)
//OUTPUT: cart = {username: "johndoe", books: ['BookA', 'BookC']}
const minus = "ABC".charCodeAt(0) - "CDB".charCodeAt(0)
console.log(minus);






