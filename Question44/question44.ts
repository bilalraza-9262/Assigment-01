// Question no 43:

function sandwich(...ingredients: string[]) {
    for (let i = 0; i < ingredients.length; i++) {
        console.log(`${i + 1}: ${ingredients[i]}`);
    };
};

console.log(`\nSandwic 01:`);
sandwich("Ham", "Cheese", "Lettuce", "Tomato");

console.log(`\nSandwic 02:`);
sandwich("Turkey", "Bacon", "Avocado");

console.log(`\nSandwic 03:`);
sandwich("Club", "Submarine", "Bagel", "Egg");