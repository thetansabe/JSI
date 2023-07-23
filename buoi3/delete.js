let company = {
  name: "XYZ Corp",
  address: {
    city: "New York",
    country: "USA",
  },
  employees: ["Alice", "Bob", "Charlie"],
};

//1) delete city
// delete company.address.city
// console.log(company);
// //2) delete address
// delete company.address
// console.log(company);
//3) delete company
company = {}
console.log(company);