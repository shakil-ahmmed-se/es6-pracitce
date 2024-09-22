// function doubleIt(num){
//    return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }
const doubleIt = num => num * 2;
const add = (a,b) => a+b;
const bigFunction = (x,y) =>{
    const sum = x + y;
    const diff = x-y;
    const r = sum * diff;
    return r;
};


const mathDo = bigFunction(10, 6);
console.log(mathDo);
const result = doubleIt(10);
const result2 = add(20,10);
console.log(result2);
console.log(result);