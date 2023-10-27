// Question no 15:

let originalGuest: string[] = [
    "Huzair",
    "Fawad",
    "Jami",
];
console.log("Original Guest List :");

for (let i = 0; i < originalGuest.length; i++) {
    console.log(`${i + 1}  ${originalGuest[i]}`);
};

// Guest not available
let guestNotAvailable: string = "Fawad";
console.log(`\nUnfortunately, ${guestNotAvailable} can't make it to the dinner.\n`);

// Replace guest for Fawad
originalGuest.splice(1, 1, "Bilal");

// Updated Guest List
console.log("Updated guest list: ");

for (let i = 0; i < originalGuest.length; i++) {
    console.log(`${i + 1}  ${originalGuest[i]}`);
};

// New Invatation
console.log("\n New Invatation");

originalGuest.forEach(guest => {
    console.log(`\n Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.`);

});
