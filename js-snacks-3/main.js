//Crea un array di oggetti che rappresentano degli animali.
//Ogni animale ha un nome, una famiglia e una classe.

let animali = [
    { nome: 'leone',
    famiglia: 'felidi',
    classe: 'mammiferi' },
    { nome: 'cane',
    famiglia: 'canidi',
    classe: 'mammiferi' },
    { nome: 'gallina',
    famiglia: 'fasianidi',
    classe: 'uccelli' }
]


let mammiferi = animali.filter(animali => animali.classe == "mammiferi")


console.log(mammiferi);