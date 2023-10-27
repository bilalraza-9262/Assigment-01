//Question no 43:

let magicianNames3: string[] = ["Houdini", "David Blaine", "Lance Burton", "Ricky Jay", "Criss Angel"];

function showMagicians3(megicians: string[]) {
    for (const megician of megicians) {
        console.log(megician);
    };
    return megicians;
};

function makeGreat(unmodified: string[]) {
    return unmodified.map((mgc) => `The Great ${mgc}`)
};

// let copyArray=magicianNames3.slice()
// let modifiedArray=makeGreat(copyArray)

let modifiedArray: string[] = makeGreat([...magicianNames3]);
showMagicians3(modifiedArray)


console.log("\nHere original Array:");
showMagicians3(magicianNames3);