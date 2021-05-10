let valor //não inicializada
console.log(valor)

/*

console.log(valor2) 
Aqui como podemos ver no console,
dá um erro, pq não foi declarado
nada com 'valor2'. Diferente de
'valor' que foi declarado.

*/

valor = null

/*

ausência de valor. Sempre usar
o nulo caso você queira zerar o
valor de uma variável.

*/

console.log(valor)
// console.log(valor.toString()) erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.59
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log (!!produto.preco)
// delete produto.preco 
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
