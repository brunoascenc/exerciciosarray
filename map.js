// MAP TRANSFORMA O ARRAY EM OUTRO DO MESMO TAMANHO
const nums = [1, 2, 3, 4, 5]
let dobro = nums.map(e => e * 2)
console.log(dobro)

const soma10 = e => e + 10
const triplo = e => e * 3
const dinheiro = e => `$R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let resultado = nums.map(soma10).map(triplo).map(dinheiro)
console.log(resultado)