// Question no 38:

function describe_city(city: string, country: string = "Pakistabn") {
    console.log(`${city} is in  ${country}`);
};

describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "United States")