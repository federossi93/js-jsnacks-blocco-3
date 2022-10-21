//Snack 1:
//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//Infine stampa separatamente i 3 array.

const automobili =[
    {
        marca: "Nissan",
        modello: "gt-r",
        alimentazione: "benzina",
    },

    {
        marca: "Alfa romeo",
        modello: "Giulia",
        alimentazione: "diesel",
    },

    {
        marca: "Aston martin",
        modello: "Db11 Coupè",
        alimentazione: "gpl",
    },

    {
        marca: "Ferrari",
        modello: "296 Gts",
        alimentazione: "benzina",
    },

    {
        marca: "Bmw",
        modello: "Z4",
        alimentazione: "metano",
    },

    {
        marca: "Toyota",
        modello: "Yaris",
        alimentazione: "elettrico",
    },

    {
        marca: "Seat",
        modello: "Arona",
        alimentazione: "elettrico",
    },

    {
        marca: "Chevrolet",
        modello: "Camaro",
        alimentazione: "benzina",
    },

    {
        marca: "Dodge",
        modello: "Viper",
        alimentazione: "benzina",
    },

    {
        marca: "Lamborghini",
        modello: "Urus",
        alimentazione: "diesel",
    },
]




let benzina = automobili.filter(automobili => automobili.alimentazione == "benzina")


console.log(benzina);




let elettrico = automobili.filter(automobili => automobili.alimentazione == "elettrico")

console.log(elettrico);





let metano = automobili.filter(automobili => automobili.alimentazione == "metano")

console.log(metano);




let diesel = automobili.filter(automobili => automobili.alimentazione == "diesel")

console.log(diesel);

