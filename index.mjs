// //Promise
// var func_one = function(callback,int){
//     console.log("The First"+int);
//     if(callback){
//         callback();
//     }
// };

// var func_two = function (callback) {
//     console.log("The Two");
//         if (callback) {
//             callback();
//         }
// };

// var func_three = function (callback) {
//     console.log("The Three");
//     if (callback) {
//         callback();
//     }
// };

// func_one(function(){
//     func_two(function(){
//         func_three();
//     });
// },1);

// function getName(){
//     setTimeout(()=>{
//         console.log("dadada");
//     },2000);
// }

// getName();

function getName() {
    return new Promise((resolve,reject) => {
        throw new Error("Errorrr");;
    });
}

function getAge(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(20);            
        }, 4000);
    });
}

// Promise.all([
//     getName(),
//     getAge()
// ])
// .then(([name,age]) =>{
//     console.log(name);
//     console.log(age);
// });


var fff =  getName()
 .then(name => {
     console.log(name);
 })
 .catch(err => {
     console.log(err);
 })
 .then(value=>{
     console.log(value);
     console.log("Finalaaaaaaaaaaaa");
 });
//  .then(getAge)
//  .then(age => {
//      console.log(age);
//  });

function getNameAll() {
    return Promise.resolve("taro")
}

getNameAll().then(name => {
    console.log(name);
})