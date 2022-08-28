const calcularValorPedido = require('./calcular-valor-pedido')

it('não deve cobrar valor de frete quanto valor dos produtos for superior a 500', () => {
    const meuPedido = {
        itens: [
          { nome: "Arco encantado", valor: 2000 },
          { nome: 'Entrega', valor: 100, entrega: true}
        ],
      }
      const resultado = calcularValorPedido(meuPedido)
      expect(resultado).toBe(2000)
})
it('deve cobrar valor de frete quanto valor dos produtos for inferior a 500', () => {
    const meuPedido = {
        itens: [
          { nome: "poção de vida", valor: 100 },
          { nome: 'Entrega', valor: 50, entrega: true}
        ],
      }
      const resultado = calcularValorPedido(meuPedido)
      expect(resultado).toBe(150)
})