function colocarAguaParaFerver(){
    console.log('colocar água para ferver')

    setTimeout(() => {
        console.log('água ferveu')
        passarOCafe()
    }, 5000)
}

function prepararPraPassarCafe(){
    console.log('pegar o pó do café')
    console.log('pegar o filtro do café')
    console.log('colocar o café no filtro')
    console.log('colocar filtro em cima da xícara')
}

function passarOCafe(){
    console.log('passando o café')
}

colocarAguaParaFerver()
prepararPraPassarCafe()