// setTimeout(function(){
//     console.log('3 segundos depois')
// }, 3000)

// setTimeout(() => {
//     console.log('2 segundos depois')
// }, 2000)

// setInterval(() => {
//     console.log('a cada 2 segundos')
// }, 2000)

const idDoIntervalo = setInterval(() => {
    console.log('executando a cada 2 segundos')
}, 2000)

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout