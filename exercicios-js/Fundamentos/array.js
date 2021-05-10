const valores = [7.8, 8.3, 6.9, 4.5]
console.log(valores[0], valores [3])
console.log(valores[4])

/* 

Em outras linguagens daria erro,
em JS não dá apenas mostra UNDEFINED.

*/ 

valores [4] = 10
console.log(valores)
console.log(valores.length)

/* 

Aqui podemos ver o n° de elementos
de um array[]

*/

valores.push({id:3}, false, null, 'teste')
console.log(valores)

/* 

Aqui podemos adicionar valores ao
nosso array[]

*/

console.log(valores.pop())

/* 

Aqui podemos tirar o último valor
do array[] e ter ele como retorno.

*/

delete valores[0]
console.log(valores)

/* 

Aqui podemos deletar um valor de
um array[]

*/

console.log(typeof valores)

/* 

Em JS um array é um OBJETO

*/

