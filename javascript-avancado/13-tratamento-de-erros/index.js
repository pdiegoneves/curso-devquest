let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(typeof chaleiraEstaNoFogao != 'boolean') throw "somente o tipo booleano é aceito"

        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando a ferver água')
            resolve(true)
        } else {
            const mensagemDeErro = 'é necessário ligar o fogão e colocar a chaleira no fogão'
            reject(mensagemDeErro)
        }
    })
}


// let chaleiraEstaNoFogao =    true
let chaleiraEstaNoFogao = 'teste'
let fogaoEstaLigado = true

let passarCafé = () => console.log('fazendo o café')

async function iniciarProcessoDeFazerCafe() {
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        passarCafé()
        throw "Mensagem de erro"
    } catch(e){
        console.log(e)
    } finally {
        console.log('Café tomado')
    }
}

iniciarProcessoDeFazerCafe()