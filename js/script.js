//testando o javascript
/*alert('Teste de integração')*/

//tipos de dados 
/*numeros = number (int ou float)

123 = int
1.23 = float

"ABC"= String
"ABC" = String

true -> boolean
false -> */

//criação de variavéis


var nome = 'ruan';
const cpf = '123.456.789-12';
let idade = 17;
/*concatenação tradicional :
document.write('olá ,mundo'); 

concatenação Template String
document.write(`olá ${nome} seu cpf é ${cpf} e você tem ${idade} anos`);  */

/*
var valor = 8;

document.write(` ${valor} x 1 = ${valor*1} <br>`);
document.write(` ${valor} x 2 = ${valor*2} <br>`);
document.write(` ${valor} x 3 = ${valor*3} <br>`);
document.write(` ${valor} x 4 = ${valor*4} <br>`);
document.write(` ${valor} x 5 = ${valor*5} <br>`);
document.write(` ${valor} x 6 = ${valor*6} <br>`);
document.write(` ${valor} x 7 = ${valor*7} <br>`);
document.write(` ${valor} x 8 = ${valor*8} <br>`);
document.write(` ${valor} x 9 = ${valor*9} <br>`);
document.write(` ${valor} x 10 = ${valor*10} <br>`);
*/

//tipos primitivos
var teste = 'String'; 
var numero = 9; //number
var boleano = true; //boolean


//matriz, vetor, array é posicionado por indíces
var matrizes = ['ruan', 'matheus', 'rafael']
//console.log(matrizes[2])


//objetos
var dadosUsuario = {
    nome : 'ruan',
    idade : 17,
    vivo : false
}

//console.log(dadosUsuario.vivo);


//atividade 1
var idade2 = 17;
var nome = 'ruan';
///console.log(`olá ${nome}, você tem ${idade2} anos.`)


//atividade 2
var valor2 = 5;
var resultado = valor2 * 5;
//console.log(`${valor2} x 5 é ${resultado}`);

//alert('teste') apenas um alerta 
//confirm('sim ou não') true or false
//prompt('barra de digitação') true or false

//var confirmar = Number ( prompt('digite o primeiro valor:: '));


//console.log( typeof((confirmar)))

//atividade 3
var numero = 'a'
//console.log(Number(numero))

var media = {
    valo1: 10,
    valo2: 10,
    valo3: 10
}

var resultado1 = (media.valo1 + media.valo2 + media.valo3)/3;

//console.log(resultado1)

var valorU = prompt('digite um valor')

console.log(`${valorU} x 1 = ${valorU * 1}`)
console.log(`${valorU} x 2 = ${valorU * 2}`)
console.log(`${valorU} x 3 = ${valorU * 3}`)
console.log(`${valorU} x 4 = ${valorU * 4}`)
console.log(`${valorU} x 5 = ${valorU * 5}`)
console.log(`${valorU} x 6 = ${valorU * 6}`)
console.log(`${valorU} x 7 = ${valorU * 7}`)
console.log(`${valorU} x 8 = ${valorU * 8}`)
console.log(`${valorU} x 9 = ${valorU * 9}`)
console.log(`${valorU} x 10 = ${valorU * 10}`)