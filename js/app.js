/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:*/

// 1) dichiara la variabile numero di km ed età passeggero
let nKm = prompt('inserisci un numero di km intero') // stringa
let nEta = prompt('inserisci età del passeggero') // stringa


// 2) il prezzo del biglietto è definito in base ai km (0.21 € al km)
let basePrice = nKm * 0.21 // numero
console.log(basePrice)
// SE è minorenne
// -- si applica uno sconto del 20%
if (nEta < 18) {
    console.log('basePrice - 0.2')
}

// calcolare lo sconto del 20%
let discount = basePrice * 0.2

// prezzo scontato = prezzo intero - sconto
let discountPrice1 = basePrice - discount
console.log(discountPrice1)

// calcolare lo sconto del 40%
let discount1 = basePrice * 0.4

// prezzo scontato = prezzo intero - sconto
let discountPrice2 = basePrice - discount1
console.log(discountPrice2)
// SE è over 65
//-- si applica uno sconto del 40%
if (nEta > 65) {
    console.log('basePrice - 0.4')
}








