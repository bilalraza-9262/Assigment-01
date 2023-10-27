// Question no 45:

interface Car {
    manufacturer: string,
    model: string,
    [key: string]: string | number
};

function createCar(manfacturer: string, name: string, ...options: Array<string | number>) {
    let car: Car = {
        manufacturer: manfacturer,
        model: name
    };
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i] as string;
        let value: string | number = options[i + 1];
        car[key] = value;


    };
    return car;
};
let myCar: Car = createCar("Toyota", "Camry", "color", "blue", "year", 2023);
console.log(myCar);

