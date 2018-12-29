//async = 
//await

let myPromise = new Promise(resolve => {
    resolve("taro");
});

async function main(){
    let name = await myPromise;
    console.log(name);
}

main();