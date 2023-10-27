// Question no 30:

let userName: string[] = ["bilal", "admin", "huzair", "fawad", "mustafa"];

for (let i = 0; i < userName.length; i++) {
    const userLogIN = userName[i];
    if (userLogIN === "admin") {
        console.log(`Hello ${userLogIN}, would you like to see a status report?`);

    } else {
        console.log(`Hello ${userLogIN}, thank you for logging in again.`);

    }
}