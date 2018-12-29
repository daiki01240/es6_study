//objct.assign()
let obj1 = {};
let obj2 = {name: "太郎"};
let obj3 = {location: "tokyo"};
// Object.keys(obj2).forEach(function (key) {
//     obj1[key] = obj2[key];
// });
Object.assign(obj1, obj2, obj3);

console.log(obj1);

//let string = Array(10).fill("*").join("");
let string = "*".repeat(10);
console.log(string);

let message = "Hello, world";
let substring = "world";
let index = message.indexOf(substring);
console.log(index);

let answer1 = message.includes(substring);
let answer2 = message.endsWith(substring);
let answer3 = message.startsWith(substring);
console.log(answer1);
console.log(answer2);
console.log(answer3);


function trunc(x) {
    return (x < 0 ? Math.ceil(x) : Math.floor(x));
}
console.log(trunc(1.111));
console.log(Math.trunc(1.111));

//isNan()
 