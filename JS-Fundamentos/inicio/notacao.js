console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = 'bola';
//obg1['nome'] = 'bola2'
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome;
    this.exec = function(){
        console.log('Exec...');
    }
}

const Obj2 = new Obj("cadeira");
const Obj3 = new Obj("Mesa");

console.log(Obj2.nome);
console.log(Obj3.nome);
Obj3.exec()