// Question no 37:

let default_message: string = "Hello coders! have a great day!";

function makeShirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
};
makeShirt();
makeShirt("medium", default_message);
makeShirt("small", "Custom message")