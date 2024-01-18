const {questionFloat} = require("readline-sync");

//Receba 4 notas e calcule a media das notas:

let nota1 = questionFloat("Informe a primeira nota ");
let nota2 = questionFloat("Informe a segunda nota ");
let nota3 = questionFloat("Informe a terceira nota ");
let nota4 = questionFloat("Informe a quarta nota ");
let nota5 = questionFloat("Informe a quinta nota ");
const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5 ;
console.log(`A media das notas é ${media}`);

let propsParcela = [
    {
        numParcela: 1,
        percentualJuros: 0,
    }
    {
        numParcela: 3,
        percentualJuros: 10,
    }
    {
        numParcela: 6,
        percentualJuros: 15,
    }
    {
        numParcela: 9,
        percentualJuros: 20,
    }
    {
        numParcela: 12,
        percentualJuros: 25,
    }
]
for (let i = 0; i<= propsParcela.length; i++){
    
}