const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const arr = JSON.parse(carrinho)
console.log(arr.preco)
const resultado = carrinho.map(e => e.preco)
console.log(resultado)