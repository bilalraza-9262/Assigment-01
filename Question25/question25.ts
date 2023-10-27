// Question no 25:


//Version Passing the If Test (alien_color is 'green'):
let alien_color: string = "green";

if (alien_color === "green") {
    console.log("player just earned 5 points");
}


//Version Failing the If Test (alien_color is 'red'):
alien_color = "yellow";

if (alien_color === "green") {
    console.log("player just earned 5 points");
}


//Version Failing the If Test (alien_color is 'red'):
alien_color = "red";

if (alien_color === "green") {
    console.log("player just earned 5 points");
}