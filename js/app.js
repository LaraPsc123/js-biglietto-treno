/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:*/

// 1) dichiara la variabile numero di km ed età passeggero
let nKm = prompt('inserisci un numero intero') // stringa
let nEta = prompt('inserisci età del passeggero') // stringa


// 2) il prezzo del biglietto è definito in base ai km (0.21 € al km)
let basePrice = 63
console.log(basePrice)
// SE è minorenne
// -- si applica uno sconto del 20%
if (nEta < 18) {
    console.log('basePrice - 0.2')

}

// calcolare lo sconto
let discount = basePrice * 0.2





