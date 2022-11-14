const nome = prompt("Digite o seu nome.");
let number1 = prompt(`${nome}, insira o primeiro número.`);
let number2 = prompt(`${nome}, insira o segundo número.`);

number1 = Number(number1);
number2 = Number(number2); 

const sum = number1 + number2;
const sub = `A subtração dos dois números é: ${number1 - number2}.`;
const div = `A divisão dos dois números é: ${number1 / number2}.`;
const rest = `O resto da divisão é: ${number1 % number2}.`;
const mult = `A multiplicação dos dois números é de: ${number1 * number2}.`;
let parImpar = sum % 2;

alert(sub);
alert(div);
alert(rest);
alert(mult);

function diference() {
    if (number1 != number2){
        alert("Os dois números são diferentes.");
    }else {
        alert("Os números são iguais.")
    }
}

diference()

function parOuImpar() {
    if(parImpar != 0) {
        alert(`A soma é o número impar: ${sum}`)
    }else {
        alert(`A soma é o número par: ${sum}`)
    }
}

parOuImpar()




