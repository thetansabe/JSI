const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

//0) copy problem
// const copyTarget = target;
// copyTarget.a = 5;
// console.log(target);

//1) valid copy
// const validTargetCopy = {...target};
// validTargetCopy.a = 5
// console.log("valid: ", validTargetCopy);
// console.log("target: ", target);

//2) Merge
// const merge = {...target, ...source}
// console.log(merge);

//3) Update
const user = { username: "johndoe", age: 25, status: "active" };
// user.status = "inactive";
console.log(user);
console.log({...user, status: "inactive"});

//output: { username: "johndoe", age: 25, status: "inactive" }