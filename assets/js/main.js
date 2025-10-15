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



//costante per isolare il form
const form = document.getElementById('calc-ticket')

//costante per isolare l'input dei chilometri
const kiloField = document.getElementById('kilo-field')

//costante per isolare l'input dell'età del passeggero
const ageField = document.getElementById('age-field')




//costante per isolare il tag h1 per stampare in pagina il prezzo
const ticketPriceField = document.getElementById('ticket-price-field')









const ageStamp = document.getElementById('age-stamp')
const priceStamp = document.getElementById('price-stamp')























//event listener per resettare il comportamento di default
//del bottone nel form
form.addEventListener('submit', (event) => {

    //reset default submit
    event.preventDefault()



    //variabile per calcolo prezzo del biglietto intero
    let ticketPrice = kiloField.value * 0.21


    //condizioni per applicare lo sconto
    if (ageField.value < 18) {
        // //variabile per calcolo sconto minorenni (<18)
        const discountUnder = Number((ticketPrice * 0.8).toFixed(2))
        ticketPrice = discountUnder

    } else if (ageField.value > 65) {
        // //variabile per calcolo sconto over 65 (>65)
        const discountOver = ticketPrice * 0.6
        ticketPrice = discountOver
    }


    console.log(ticketPrice);


    //modifica del contenuto HTML del tag h1
    //arrotondamento delle cifre decimali a 2 cifre
    ticketPriceField.textContent = `${ticketPrice.toFixed(2)}€`


    ageStamp.textContent = ageField.value
    priceStamp.textContent = `${ticketPrice.toFixed(2)}€`

})

