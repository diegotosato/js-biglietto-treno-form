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
let kiloField = document.getElementById('kilo-field')

//costante per isolare l'input dell'età del passeggero
const ageField = document.getElementById('age-field')



//costante per isolare il form
const form = document.querySelector('form')

//event listener per resettare il comportamento di default
//del bottone nel form
form.addEventListener('submit', (event) => {

    //reset default submit
    event.preventDefault()

    //log per controllare la corretta raccolta dei valori inseriti
    kiloField = kiloField.value
    console.log(kiloField);
    
})

