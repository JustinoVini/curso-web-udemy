// Armazenando uma função dentro de uma variavel 
const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma funcao arrow em uma variavel.
const soma = (a, b) => {
    return a + b;
}
console.log(soma);

// Retorno implicito
const subtracao = (a, b) => a - b;
console.log(2, 3);
