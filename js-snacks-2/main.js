//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo
//e con l’iniziale maiuscola.
//Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

let nomi = ["FEDERICO","marco","giacomo"]

// let nomiLw = nomi.map(element =>{
//     return element.toLowerCase()
// })

// console.log(nomiLw);

// let nomiUp = nomi.map(elements =>{
//     return elements.charAt(0).toUpperCase()
// })

let nomiLw = nomi.map(element => {
    let minuscolo = element.toLowerCase()
    console.log(minuscolo);
    let primaLettera = minuscolo.charAt(0).toUpperCase()
    console.log(primaLettera);
    let divisione = minuscolo.slice(1)
    console.log(divisione);
    let unioneStr = primaLettera + divisione
    return unioneStr
})

console.log(nomiLw);