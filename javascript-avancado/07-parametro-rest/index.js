// function incentivarQuester(menagem, nomeQuester) {
//     console.log(`${menagem}, ${nomeQuester}`)
// }
function incentivarQuester(mensagem, ...nomesQuesters) {
    nomesQuesters.map(nomeQuester => console.log(`${mensagem}, ${nomeQuester}`))
}

incentivarQuester('Parabens por ter chego ao módulo de JavaScript avançado', "Diego", "Pedro", "Roberto")