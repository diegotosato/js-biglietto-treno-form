console.log('lavora');



//variabile per i chilometri
const kilo = 10

//variabile per l'età dell'utente
const age = prompt('age')


//variabile per calcolo prezzo del biglietto intero
let ticketPrice = kilo * 0.21

//variabile per calcolo sconto minorenni (<18)
const discountUnder = priceKilo * 0.8

//variabile per calcolo sconto over 65 (>65)
const discountOver = priceKilo * 0.6



if (age < 18) {
    ticketPrice = discountUnder
} else if (age > 65) {
    ticketPrice = discountOver
}

console.log(priceKilo);
