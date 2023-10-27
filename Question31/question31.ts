// Question no 31:

let newAge: number = 16;

let users: string[] = [];

if (users.length === 0) {
    console.log("We need to find some users!");

} else {
    if (newAge < 2) {
        console.log("You are a baby.");
    } else if (newAge >= 2 && newAge < 4) {
        console.log("You are a toddler.");
    } else if (newAge >= 4 && newAge < 13) {
        console.log("You are a kid.");
    } else if (newAge >= 13 && newAge < 20) {
        console.log("You are a teenager.");
    } else if (newAge >= 20 && newAge < 65) {
        console.log("You are an adult.");
    } else {
        console.log("You are an elder.");
    }
}