const alunos = [
    { nome: 'Bruno', nota: 9.3, bolsista: true },
    { nome: 'Ana', nota: 6.2, bolsista: true },
    { nome: 'Joao', nota: 8.8, bolsista: false },
    { nome: 'Gabi', nota: 7.7, bolsista: false }
]
// todos sao bolsistas?
const todosBolsistas = (acumulador, bolsista) => acumulador && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//algum é bolsista?
const algum = (acumulador, bolsista) => acumulador || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algum))
