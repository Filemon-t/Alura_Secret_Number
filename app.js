// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');   - modo classico
//paragrafo.innerHTML = c;

let lista = []; // lista vazia
let limite = 30;
let numSecreto = gerarNum();
let tentativas = 1;

function exibirTexto(tag, texto){  // oq está em () é um parametro
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // junto com a linha 7 do html, esse comando permite que demos uma voz para nosso site
}
function exibirReiniciar() {
    exibirTexto('h1','Jogo do número secreto'); // criando uma função para o código a cima
exibirTexto('p',`Escolha um número entre 1 e ${limite}`); // modo simplificado
}

exibirReiniciar();

function verificarChute() {
    let inputElem = document.querySelector('input'); // seleciona o input
    let chuteStr = inputElem.value; // pega o valor digitado no input
    let chute = parseInt(chuteStr, 10);

    // validação: vazio
    if(!chuteStr){ // === igualdade restrita
        exibirTexto('p', `Valor vazio, por favor digite um número entre 1 e ${limite}`);
        return;
    }
    // converte e valida número
    if(chute > limite){
        exibirTexto('p', `Número maior do que esperado, por favor digite um número inteiro entre 1 e ${limite}`);
        limparcampo();
        return;
    }
    // validação: decimal ou negativo
    if (!/^[0-9]+$/.test(chuteStr)) {
        exibirTexto('p', 'Valor inválido, por favor digite um valor inteiro positivo');
        limparcampo();
        return;
    }

    if(chute === numSecreto){
        exibirTexto('h1', 'Acertou!!');
        let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `você descobriu o número secreto com ${tentativas} ${palavra}!!`;
        exibirTexto('p',msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); //o atributo disabled do html foi desativado
    } else {
        if(chute > numSecreto){
            exibirTexto('p','O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparcampo();
    }
}

function gerarNum() {
    let numEscolhido = parseInt(Math.random()*limite+1); // return - retorna um resultado quando a função é chamada
    let quantidade = lista.length;

    if(quantidade == limite){
        lista = [];
    }
    if(lista.includes(numEscolhido)){ // "includes" = verifica se o elemento está na lista
        return gerarNum (); // não é legal colocar em um grande código uma função que chama outra
    }else {
        lista.push(numEscolhido); //push = adiciona no final da lista
        console.log(lista);
        return numEscolhido;
    }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNum();
    console.log(numSecreto);
    limparcampo();
    tentativas = 1;
    exibirReiniciar();
    document.getElementById('reiniciar').setAttribute('disabled',true); // o atributo disabled do html foi reativado
    // exibirTexto('h1','Jogo do número secreto'); 
    // exibirTexto('p','Escolha um número entre 1 e 10'); - poderia ser assim mas para maior organização vamos criar uma função
}
