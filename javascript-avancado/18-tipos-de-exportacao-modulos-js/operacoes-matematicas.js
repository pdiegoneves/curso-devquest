// Exportação Padrão
// function somar(...numeros){
//     let total = 0
//     numeros.map(numero => total += numero)
//     return total
// }
// export default somar


// Exportação Nomeada - aconselhada
function somar(...numeros){
    let total = 0
    numeros.map(numero => total += numero)
    return total
}


export {somar}