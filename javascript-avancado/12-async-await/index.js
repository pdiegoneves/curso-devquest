// new Promise((resolve, reject) => {

// })

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando a ferver água')
            resolve(true)
        } else {
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão')
            reject()
        }
    })
}


let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let passarCafé = () => console.log('fazendo o café')

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafé)


async function iniciarProcessoDeFazerCafe() {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    passarCafé()
}

iniciarProcessoDeFazerCafe()