// MODIFICA O ARRAY PASSANDO PARAMETROS NO ACUMULADOR

const alunos = [
    { nome: 'Bruno', nota: 9.3, bolsista: true },
    { nome: 'Ana', nota: 6.2, bolsista: true },
    { nome: 'Joao', nota: 8.8, bolsista: false },
    { nome: 'Gabi', nota: 7.7, bolsista: false }
]

const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => acumulador + atual)
console.log(resultado)