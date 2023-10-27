// Question no 17:

let guestList: string[] = [
    "Mustafa",
    "Huzair",
    "Hamza",
    "Bilal",
    "Jami",
    "Fawad"
];

console.log("Original Guest List:");
guestList.forEach(guest => {
    console.log(`- ${guest}`);
});

console.log("\nUnfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people for dinner.\n");

console.log("Removing guests...");

while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

console.log("\nRemaining Guests:");
guestList.forEach(guest => {
    console.log(`- ${guest}`);
});

console.log("\nInvitations for Remaining Guests:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still cordially invited to dinner. Please join us for an evening of great conversation and delicious food.`);
});

console.log("\nRemoving the last two names...");

guestList.pop();
guestList.pop();

console.log("\nFinal Guest List:");
console.log(guestList);