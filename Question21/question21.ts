// Question no 21:
interface Information {
    title: string,
    founded: string,
    founder: string,
    programs: string[],
    location: string,
    websie: string
}

let piaic:Information =
{
    title: "PIAIC",
    founded: "9 December 2018",
    founder: "Arif Alvi",
    programs: [
        "Artificial Intelligence",
        " Cloud Native and Mobile Web Computing",
        " Blockchain",
        " Internet of Things(IoT)"],
    location: "Pakistan",
    websie: "https://www.piaic.org"
};
// Add more books here

console.log("Information about PIAIC\n")
console.log(`Title: ${piaic.title}`);
console.log(`Founded: ${piaic.founded}`);
console.log(`Founder: ${piaic.founder}`);
console.log(`Programs: ${piaic.programs}`);
console.log(`Location: ${piaic.location}`);
console.log(`Website: ${piaic.websie}`);






