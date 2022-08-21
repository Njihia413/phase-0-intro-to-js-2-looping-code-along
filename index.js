// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//       debugger;
//     }
  
//     return gifts;
// }
  
// wrapGifts(gifts);

let names = ["Guadalupe", "Ollie", "Aki"];
let event = "surprise";
let thankYouMessages = [];
function writeCards(names, event) {
    for(let counter = 0; counter < names.length; counter++) {
        thankYouMessages.push(`Thank you, ${names[counter]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages
}

function countDown (number) {
    while(number > 0) {
        console.log(number);
        number --;
    }
    console.log(number);
}