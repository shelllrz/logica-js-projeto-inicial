let nome = prompt ('Qual é seu nome?');
alert ('Olá, ' + nome + '! Bem-vindo(a) ao nosso site');
let numeroSecreto = 20;
let chute;
while (chute != numeroSecreto) {
  chute = prompt ('Tente adivinhar o número secreto entre 1 e 20');
  if (chute == numeroSecreto) {
  alert ('Parabéns, você acertou o número secreto!');
       } else {
  if (chute < numeroSecreto) {
    alert ('O número secreto é maior do que ' + chute);
  } else {
    alert ('O número secreto é menor do que ' + chute);
  }
}
} 

