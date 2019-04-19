// FILTRA UM ELEMENTO RETORNANO TRUE OR FALSE
const produtos = [
    { nome: 'Notebok', preco: 2499, fragil: true },
    { nome: 'cel', preco: 299, fragil: true },
    { nome: 'rebok', preco: 24, fragil: false },
    { nome: 'cpo', preco: 99, fragil: false }
]

// console.log(produtos.filter(p => {
//     return p.preco > 1000
// }))

const resultado = produtos.filter(p => {
    if (p.preco > 98 && p.fragil === true) {
        return p
    }
})
console.log(resultado)