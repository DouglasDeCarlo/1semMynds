//console.log("hello world");







var nome = "douglas";

let idade = 13;
let altura = 1.56;

const cpf = "222.333.434-55"

var numeroNormal = 2;
var numeroQuebrado = 33.2;

var textoNormal = "Este é apenas um texto normal com aspas e variavel",numeroNormal;
var textoComVariavel = `este é um texto com crase e variavel ${numeroNormal} dasadasdasdas`;

var verdadeiro = true;
var falso = false;

console.log(numeroNormal)
console.log(numeroQuebrado)
console.log("---------------")
console.log(textoNormal)
console.log(textoComVariavel)
console.log("---------------")
console.log(verdadeiro)
console.log(falso)
console.log("----------------")



var objeto = {
    nome: "Douglas",
    idade: 13
};

console.log(objeto)


var a = "1"
var b = 2

console.log("a é igual a b sem a tipagem:", a == b);
console.log("a é igual a b com tipagem:", a === b);
console.log("a é diferente de b com a tipagem:", a !== b);
console.log("a é diferente de b sem tipagem:", a != b);


var numero = 0;

function Cliquei() {
    numero++;
    console.log("cliquei aqui");
    console.log(`${numero} vezes`);
}

const Arrow = () => {
    console.log("sou uma arrow function")
    console.log("Eu funciono igual uma função normal, o que muda é a forma")
};




const Soma = (num1, num2) => {
    return num1 + num2;
}
const resultado = Soma(23, 7);
console.log("este é o resultado", resultado)