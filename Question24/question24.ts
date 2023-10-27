// Question no 24:

let str1: string = "hello";
let str2: string = "world";

let num1: number = 6;
let num2: number = 8;

let arr: Array<number> = [1, 3, 5, 7, 9];

// (1):
console.log("\nTests for equality and inequality with strings:");

//Equal
console.log("Is str1 equal to str2? I predict False.");
console.log(str1 === str2);

//unequal
console.log("Is str1 not equal to str2? I predict True.");
console.log(str1 !== str2);

// (2):
console.log("\nTests using the lower case function:");

console.log("Is str1 in lowercase equal to 'hello'? I predict True.");
console.log(str1.toLowerCase() == "hello");

// (3):
console.log("\nNumerical tests involving equality and inequality, greater than and less than, grater than or equal to and less than or equal to :");

//Equal
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 == num2);

//unequal
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2);

//geater than
console.log("Is num1 grater than num2? I predict False.");
console.log(num1 > num2);

//Less than
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);

//Grater than or equal to
console.log("Is num1 graeter than or equal to num2? I predict False.");
console.log(num1 >= num2);

//Less than or equal to
console.log("Is num1 less than equal to num2? I predict True.");
console.log(num1 <= num2);


// (4):
console.log("\nTests using 'and' and 'or' operators:");

//using && operator
console.log("Is num1 greater than 7 and num2 less than 10? I predict False.");
console.log(num1 > 7 && num2 < 10);

//using || operator
console.log("Is num1 greater than 9 or num2 less than 11? I predict True.");
console.log(num1 > 9 || num2 < 11);

// (5):
console.log("\nTest whether an item is in an array:");
console.log("Is 7 in the array? I predict True.");
console.log(arr.includes(7))

// (6)
console.log("\nTest whether an item is not in an array:");
console.log("Is 4 not in the array? I predict True.")
console.log(!arr.includes(4));
