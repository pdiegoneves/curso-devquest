let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Raphael', idade: 27}
]

// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)
// }


// let nomeDasPessoas = pessoas.map((pessoa) => pessoa.nome)
let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + ' tem ' + pessoa.idade + ' de idade')


console.log(nomeDasPessoas)