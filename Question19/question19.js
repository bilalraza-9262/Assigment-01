"use strict";
// Question no 19:
// I want to work  on exercise no 15:
//HERE START EXERCISE 15:
let original_Guest = [
    "Huzair",
    "Fawad",
    "Jami",
];
console.log("Original Guest List :");
for (let i = 0; i < original_Guest.length; i++) {
    console.log(`${i + 1}  ${original_Guest[i]}`);
}
;
// Guest not available
let guestNot_Available = "Fawad";
console.log(`\nUnfortunately, ${guestNot_Available} can't make it to the dinner.\n`);
// Replace guest for Fawad
original_Guest.splice(1, 1, "Bilal");
// Updated Guest List
console.log("Updated guest list: ");
for (let i = 0; i < original_Guest.length; i++) {
    console.log(`${i + 1}  ${original_Guest[i]}`);
}
;
// New Invatation
console.log("\n New Invatation");
original_Guest.forEach(guest => {
    console.log(`\n Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.`);
});
//HERE END EXERCISE 15.
//NOW START EXERCISE 19:
console.log(`\nnumber of people invited to dinner ${original_Guest.length}`);
