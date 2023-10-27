// Question no 18:

let favouritePlays: string[] = ["Pakistan", "Saudia", "Canada", "Germany", "Italy"];

//Original list
console.log(`Original List: ${favouritePlays}\n`);

//Now sort array with alphabatical order:
let alphabaticalOrder: string[] = [...favouritePlays].sort();
console.log(`Alphabatical List: ${alphabaticalOrder}\n`);

//Now show the favouriteList is still in Original order:
console.log(`Original List: ${favouritePlays}\n`);

//Reverse array in alphabatical order:
let reverseAlphabaticalOrder: string[] = [...alphabaticalOrder].reverse();
console.log(`Reverse Alphabatical List: ${reverseAlphabaticalOrder}\n`);

//Now show the favouriteList is still in Original order:
console.log(`Original List: ${favouritePlays}\n`);

//now reverse original array:
// let reverseFavouiritePlays=favouritePlays.reverse();
// console.log(reverseFavouiritePlays);
favouritePlays.reverse();
console.log(`Reverse Original List: ${favouritePlays}\n`);

//now reverse list make original list:
favouritePlays.reverse();
console.log(`Original List: ${favouritePlays}\n`);

//now sort original list:
favouritePlays.sort();
console.log(`Sorted Original List: ${favouritePlays}\n`);

//now reverse sorted original list:
favouritePlays.sort().reverse();
console.log(favouritePlays);

