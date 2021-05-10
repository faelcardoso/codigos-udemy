const escola = "cod3r"

console.log(escola.charAt(2))

{
    console.log(escola.charAt(5))

    // Não imprime nada, pois o JS interpreta como NULO

}
    
{
    console.log(escola.charCodeAt(2))

    /*

    aqui podemos imprimir qual o código
    na tabela ascii ou unicode da letra
    no índice escolhido, no caso o d no
    índice n°2

    */

}

{
    console.log(escola.indexOf('o'))

    /*

    aqui podemos imprimir e ver
    qual o índice de uma determinada 
    letra

    */

}

{
    console.log(escola.substring(1))

    /* 
    
    Aqui nós imprimimos o que está
    escrito, a partir da letra localizada
    no índice n°1. E assim vai.

    */

}

{
    console.log(escola.substring(0, 3))

    /*

    Aqui imprimimos tudo o que
    está escrito começando do
    índice n°0, indo até o índice
    n°3. Porém, sem colocar o que
    está escrito no índice n°3.

    */

}

{
    console.log('Escola '.concat(escola).concat('!'))

    /*

    Aqui imprimimos uma junção de strings
    a string 'Escola ' (que é um literal ou
    seja, um valor que não foi atribuido
    através de uma CONST) + a constante de
    escola + a string '!'. Formando a
    frase Escola cod3r!
    (podemos usar o + também, para conca-
    tenação)

    */

}

{
    console.log(escola.replace(3, 'e'))

    /*

    Aqui como podemos ver, o método
    substituiu o 3 pela string 'e'.

    */

}

{
    console.log('Ana,Maria,Pedro'.split(','))

    /* 

    Aqui, criamos um array, que será
    explicado em uma aula futura.

    */

}
''