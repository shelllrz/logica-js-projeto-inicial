alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos';
let nomedoUsuario = prompt('Qual é seu nome?');
if (nomedoUsuario == '') {
  alert(mensagemDeErro);
} else {
  alert('Tudo certo!');
}
let idadedoUsuario = prompt('Informe sua idade');
if (idadedoUsuario == '') {
  alert(mensagemDeErro);
} else {
  alert('Tudo certo!');
}
if (idadedoUsuario >= 18) {
  alert('Já pode tirar habilitação');
} else {
    alert('Não pode tirar habilitação');
}
console.log("teste");

