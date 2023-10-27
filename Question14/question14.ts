// Question no 14:

let myInvitatrion:string[] = [
    "Huzair",
    "Fawad",
    "Jami",
]

myInvitatrion.forEach( guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.`);
}); 

//here is loop method:
// for (let  i= 0;  i< myInvitatrion.length; i++) {
//     console.log(`Dear ${myInvitatrion[i]}, you are cordially invited to dinner. Please join us for an evening of great conversation and delicious food.`);
// }