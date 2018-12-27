// generator
// let arr = [10,20,30];

// for (n of arr.entries()){
//     console.log(n);
// }

// function* myGenerator(){
//     console.log("a");
//     yield 1;
//     console.log("i");
//     yield 2;
//     console.log("u");
//     yield 3;
//     console.log("e");
// }

// let iter = myGenerator();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
let obj = {
    *myGenerator(){
        yield 1;
    }
}

let iter = obj.myGenerator();
console.log(iter.next());