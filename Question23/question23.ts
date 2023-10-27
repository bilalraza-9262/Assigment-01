// Question no 23:

let car: string = "oadi";

//True predictions:
console.log("True Predictions\n");

// (1)
console.log("Is car === oadi? I predict True.");
console.log(car === "oadi");

// (2)
console.log("Is car !='toyota'? I predict True");
console.log(car != "toyota");

// (3)
console.log("Is car !=='Oadi'? I predict True ");
console.log(car !== "Oadi");

// (4)
console.log("is car is lenght >= 4 ? I predict True");
console.log(car.length >= 4);

// (5)
console.log("is car.charAt(2)=='a'? I predict True ");
console.log(car.charAt(2) == "d");


//False  prediction:
console.log("False Predictios\n");

// (1)
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

// (2)
console.log("Is car === 'Oadi'? I predict False.");
console.log(car === 'Oadi');

// (3)
console.log("Is car == 'Mehran'? I predict False.");
console.log(car == 'mehran');

// (4)
console.log("Is car.length > 4? I predict False.");
console.log(car.length > 4);

// (5)
console.log("is car.charAt(3)=='a'? I predict False");
console.log(car.charAt(3) == "a");
