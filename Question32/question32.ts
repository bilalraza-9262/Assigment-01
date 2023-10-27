// Question 32:

let current_users: string[] = ["Bilal", "Huzair", "Mustafa", "Jami", "Fawad"];
let new_users: string[] = ["Imran", "Saad", "Hamza", "Bilal", "Fawad"];

// NOTE: 
//      "includes method" gives me error so that's why i am doing code from this method


for (const nu of new_users) {
    let found = false;

    for (const cu of current_users) {
        if (nu === cu) {
            found = true;
        };
    };

    if (found) {
        console.log(`Username "${nu}" is already taken. Please choose a different username.`);
    } else {
        console.log(`Username "${nu}" is available.`);
    };
};