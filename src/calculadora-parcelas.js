const {questionFloat} = require("readline-sync")
const { imprimeValoresParcela } = require('./functions-utils')

const valorDivida = questionFloat("Informe valor da divida: ")

let propsParcela = [
    {
        numParcela: 1,
        percentualJuros: 0,
    },
    {
        numParcela: 3,
        percentualJuros: 10,
    },
    {
        numParcela: 6,
        percentualJuros: 15,
    },
    {
        numParcela: 9,
        percentualJuros: 20,
    },
    {
        numParcela: 12,
        percentualJuros: 25,
    },
];

// const primeiroItem = propsParcela[0];
// console.log(primeiroItem)

 for (let i = 0; i < propsParcela.length; i++){
     const props = propsParcela[i];
     
     imprimeValoresParcela(valorDivida, props.numParcela, props.percentualJuros)
 }
