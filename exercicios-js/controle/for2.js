const notas = [10.0, 4.6, 8, 2.4, 7.8]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Magalhães',
    idade: '19',
    Peso: '75'
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
