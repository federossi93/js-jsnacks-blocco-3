//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo
//e con l’iniziale maiuscola.
//Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

let nomi = ["FEDERICO","marco","giacomo"]

let nomiLw = nomi.map(element =>{
    return element.toLowerCase()
})

console.log(nomiLw);

let nomiUp = nomi.map(elements =>{
    return elements.charAt(0).toUpperCase()
})

console.log(nomiUp);

//prende una porzione dellas tringas a partire dal caratter
// da rivedere
let comp = nomiLw.slice(1)

console.log(comp);