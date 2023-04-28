// par nome valor
const saudacao = 'opa' // contexto lexico 1
// lexico, local onde a sua variavel foi definida no código

function exec() {
    const saudacao = 'falaa' // contexto lexico 2
    return saudacao
}

// objetos são grupos aninhados chave valor 
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 60,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);