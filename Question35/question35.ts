// Question no 35:

let animals: string[] = ["dog", "cat", "rabbit"];
let commonCharacteristic: string = "They are mammals.";

for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(`A ${animal} would make a great pet.`);
};

console.log(`What these animals have in common: ${commonCharacteristic}`);

