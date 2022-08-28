let frutas = ['banana', 'maçã', 'laranja', 'uva' ]

// let frutasExtraidas = frutas.slice(1,3)
// let frutasExtraidas = frutas.slice(1)

// console.log(frutasExtraidas)
// console.log(frutas)

// let frutasExtraidas2 = frutas.splice(1, 2)
// console.log(frutas)
// console.log(frutasExtraidas2)

let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'pêra')

console.log(frutas)
console.log(removeEAdicionaFrutas)