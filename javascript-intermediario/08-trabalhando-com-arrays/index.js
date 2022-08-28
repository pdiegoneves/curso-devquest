let frutas = ['banana', 'maçã', 'laranja', 'pêra' ]
let frutasTamanho = frutas.length
// for(let i = 0; i < frutasTamanho; i++ ){
//     console.log('Fruta: ' + frutas[i])
// }

// frutas.forEach(function(item, indice, array){
frutas.forEach(function(item){
    console.log('Fruta: ' + item)
})


frutas.pop()
frutas.shift()
frutas.unshift('morango')
frutas.push('manga')

console.log('Posição laranaja: ' + frutas.indexOf('laranja'))




frutas.forEach(function(item){
    console.log('Fruta: ' + item)
})

