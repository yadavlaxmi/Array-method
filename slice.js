let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part)
// output=Banana

let str1 = "Apple, Banana, Kiwi";
let part1 = str1.slice(-12, -6);
console.log(part1)
// output=banana

let str2="Apple, Banana, Kiwi"
let part2 = str.slice(7);
console.log(part2)
// output=banana,kiwi


let str3 ="Apple, Banana, Kiwi"
let part3 = str.slice(-12);
console.log(part3)
//  output=banana,kiwi

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus)

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits1.slice(3);
console.log(citrus1)

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits2.slice(1, 3);
console.log(citrus)

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus3 = fruits3.slice(2);
console.log(citrus3)