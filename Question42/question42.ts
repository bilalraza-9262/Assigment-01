// Question no 42:


//copy of exercise 39:
// function  city_countr(cityName:string,countryName:string) {
//     return `"${cityName},${countryName}"`;
// };
// console.log(city_countr("Lahore","Pakistan");
// console.log(city_countr("Munich","Germany"));
// console.log(city_countr("Toronto","Canada"));


let magicianNames2: string[] = ["Houdini", "David Blaine", "Lance Burton", "Ricky Jay", "Criss Angel"];

function showMagicians2(megicians: string[]) {
    for (const megician of megicians) {
        console.log(megician);
    };
    return megicians;
};

function make_great(modified: string[]) {
    return modified.map((mgc) => `The Great ${mgc}`)
};

magicianNames2 = make_great(magicianNames2)
showMagicians2(magicianNames2);





