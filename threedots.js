const ages = [12, 20,34, 30, 10];
const ages2 = [20,49,59,69];
const ages3 = [10,39,59,69];

const allAges = ages.concat(ages2).concat(ages3).concat([5]);
const allAges2 = [...ages, ...ages2, 5,6, ...ages3]

console.log(allAges2);
console.log(allAges);

const a = 10;
const b = 20;
const c = 15;

const allNum = [20, 40, 10, 11, 50, 16, 20];
const maxNum = Math.max(...allNum)

console.log(maxNum);

const maxium = Math.max(a, b, c);
console.log(maxium);