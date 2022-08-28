'use strict'
// console.log(this)
// console.log(window === this)

// this.name = 'Ricardo'
// function saudar() {
//     console.log('this no contexto da função', this)
//     console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Ricardo',
//     saudar: function () {
//         console.log('this no contexto do metódo', this)

//         console.log('this.nome no contexto do metódo', this.nome)

//     }
// }

// usuario.saudar()

let comida = {
    nome: 'Brócolis',
    temperatura: 0,
}

// comida.cozinhar = function(comidaParacozinhar, temperaturaDeCozimento) {
comida.cozinhar = function(temperaturaDeCozimento) {
    console.log('this no contexto do objeto comida', this)
    this.temperatura = temperaturaDeCozimento
}

console.log(comida)

// comida.cozinhar(comida, 100)
comida.cozinhar(100)

console.log(comida)