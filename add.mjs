
export * from "./util";

export function add(a,b){
    return a + b;
}

export function sub(a, b) {
    console.log(a);
    return a - b;
}

export default{
    name: "Tom",
    add: add
}