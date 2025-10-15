// //variabile per i chilometri
// const kilo = 10

// //variabile per l'età dell'utente
// const age = 27


// //variabile per calcolo prezzo del biglietto intero
// let ticketPrice = kilo * 0.21

// //variabile per calcolo sconto minorenni (<18)
// const discountUnder = ticketPrice * 0.8

// //variabile per calcolo sconto over 65 (>65)
// const discountOver = ticketPrice * 0.6



// if (age < 18) {
//     ticketPrice = discountUnder
// } else if (age > 65) {
//     ticketPrice = discountOver
// }

// console.log(ticketPrice);



/*---------------------------------------------------------------*/

//costante per isolare l'input dei chilometri
const kiloField = document.getElementById('kilo-field')

//costante per isolare l'input dell'età del passeggero
const ageField = document.getElementById('age-field')

console.log(kiloField.value, ageField.value);

