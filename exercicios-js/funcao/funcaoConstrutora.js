function Carro(velocidadeMaxima = 200, delta = 5) {

    // Atributo privado
    let velocidadeAtual = 0 

    // Metodo público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo Publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(300, 100)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())

console.log(typeof ferrari)
console.log(typeof Carro)
