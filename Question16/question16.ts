// Question no 16:

let originalGuest_: string[] = [
    "Huzair",
    "Fawad",
    "Jami",
];
console.log("Original Guest List :");

for (let i = 0; i < originalGuest_.length; i++) {
    console.log(`${i + 1}  ${originalGuest_[i]}`);
};

// Guest not available
let guestNotAvailable_: string = "Fawad";
console.log(`\nUnfortunately, ${guestNotAvailable_} can't make it to the dinner.\n`);

// Replace guest for Fawad
originalGuest_.splice(1, 1, "Bilal");

// Updated Guest List
console.log("Updated guest list: ");

for (let i = 0; i < originalGuest_.length; i++) {
    console.log(`${i + 1}  ${originalGuest_[i]}`);
};

// New Invatation
console.log("\n New Invatation");

originalGuest_.forEach(guest => {
    console.log(`\n Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.`);

});
//That was exercise no 15, now we will start a new exercise

// New uptade for all Guest:
console.log("\nGood news! We have a bigger dinner table!\n");

// Add new members in above exercise:
console.log("\n now we are adding new members");

originalGuest_.unshift("Mustafa");
originalGuest_.splice(Math.floor(originalGuest_.length / 2), 0, "Hamza");
originalGuest_.push("Fawad");

// Updated Guest List:
for (let i = 0; i < originalGuest_.length; i++) {
    console.log(`${i + 1} ${originalGuest_[i]}`);
}

// New Invatation for all Guest:
console.log("\nNew invatation for all guest\n");

originalGuest_.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.`);

})





