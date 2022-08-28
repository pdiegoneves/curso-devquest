function somar(...numeros){
    let total = 0
    numeros.map(numero => total += numero)
    return total
}


function multiplicar(numero1, numero2){
    return numero1 * numero2
}

export { somar, multiplicar}