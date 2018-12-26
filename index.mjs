// //分割代入
// var numbers = [1,2,3,4];
// let [a,b,c,d] = numbers;
// console.log(a)

// function getConfig(){
//     return[
//         true,
//         10,
//         1,
//         2,
//         3
//     ]
// }

// const config = getConfig();
// console.log(config[0]);

// const [isOn, amount,...data] = getConfig();
// console.log(isOn);
// console.log(amount);
// console.log(data);

// let _isOn = false;
// let _amount = 10;

// function setConfig(config){
//     _isOn = config[0];
//     _amount = config[1];
// }
// function setConfig([isOn, amount]) {
//     _isOn = isOn;
//     _amount = amount;
// }

// setConfig([true,20]);

var config = {};
function setConfig({isOn,amount}){
    config = {isOn,amount};
    console.log(config);
}

setConfig({ isOn: true, amount: 30});

function  getConfig() {
    return {
        isOn: true,
        amount: 10,
        servers:{
            a:"abcd",
            b:"efgh"
        }
    }
}

let {isOn: onOffInfo, amount:dataAmount} = getConfig();
console.log(onOffInfo, dataAmount);