// Question no 03:

let personName: string = "Sir Zia Khan";

let lowerCase: string = personName.toLowerCase();
let upperCase: string = personName.toUpperCase();

let titleCase: string = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();

console.log(`Lower Case: ${lowerCase}`);
console.log(`Upper Case: ${upperCase}`);
console.log(`Title Case: ${titleCase}`);





// function totittleCase(str:string) {
//     return str.replace(/\w\S*/g,(txt)=>txt.charAt(0).toUpperCase()+txt.slice(1).toLowerCase())
// };
// const tittleCase=totittleCase(personName)
