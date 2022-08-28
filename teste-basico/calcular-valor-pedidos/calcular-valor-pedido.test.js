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
it('Deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {
  const pedidoComEstadoRS = {
    estado: 'RS',
    itens: [
      { nome: "sanduiche bem caro", valor: 500 },
      { nome: 'Entrega', valor: 100, entrega: true}
    ],
  }
  const resultado = calcularValorPedido(pedidoComEstadoRS)

  expect(resultado).toBe(620)
})
it('Deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', () => {
  const pedidoComEstadoSC = {
    estado: 'SC',
    itens: [
      { nome: "sanduiche bem caro", valor: 500 },
      { nome: 'Entrega', valor: 100, entrega: true}
    ],
  }
  const resultado = calcularValorPedido(pedidoComEstadoSC)

  expect(resultado).toBe(620)
})

it('Não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () => {
  const pedidoComEstadoSP = {
    estado: 'SP',
    itens: [
      { nome: "sanduiche bem caro", valor: 500 },
      { nome: 'Entrega', valor: 100, entrega: true}
    ],
  }
  const resultado = calcularValorPedido(pedidoComEstadoSP)

  expect(resultado).toBe(600)
})