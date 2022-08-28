const calcularValorPedido = require('./calcular-valor-pedido')

it('não deve cobrar valor de frete quando valor dos produtos for superior a 500', () => {
    const meuPedido = {
        itens: [
          { nome: "Arco encantado", valor: 2000 },
          { nome: 'Entrega', valor: 100, entrega: true}
        ],
      }
      const resultado = calcularValorPedido(meuPedido)
      expect(resultado).toBe(2000)
})
it('deve cobrar valor de frete quando valor dos produtos for inferior a 500', () => {
    const meuPedido = {
        itens: [
          { nome: "poção de vida", valor: 100 },
          { nome: 'Entrega', valor: 50, entrega: true}
        ],
      }
      const resultado = calcularValorPedido(meuPedido)
      expect(resultado).toBe(150)
})
it('deve cobrar valor de frete quando valor dos produtos for igual a 500', () => {
    const meuPedido = {
        itens: [
          { nome: "sanduiche bem caro", valor: 500 },
          { nome: 'Entrega', valor: 50, entrega: true}
        ],
      }
      const resultado = calcularValorPedido(meuPedido)
      expect(resultado).toBe(550)
})