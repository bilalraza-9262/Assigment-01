// Question no 26:


//Version Running the If Block (alienColor is 'green'):
let alienColor: string = "green";

if (alienColor === "green") {

    console.log(`color is ${alienColor} so,`);
    console.log("you just earned 5 points for shooting the alien");

} else {

    console.log("you just earned 10 points  for shooting the alien");

}

//Version Running the Else Block (alienColor is 'red'):
alienColor = "red";

if (alienColor === "green") {

    console.log("you just earned 5 points for shooting the alien");

} else {

    console.log(`color is ${alienColor} so,`);
    console.log("you just earned 10 points  for shooting the alien");

}

//Version Running the Else Block (alienColor is 'yellow'):
alienColor = "yellow";

if (alienColor === "green") {

    console.log("you just earned 5 points for shooting the alien");

} else {

    console.log(`color is ${alienColor} so,`);
    console.log("you just earned 10 points  for shooting the alien");

}
