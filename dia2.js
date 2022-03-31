/* Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!" */

const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem de programação você está estudando?');

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

while (!(resposta == '1' || resposta == '2')) {
    resposta = prompt('Por favor, digite uma resposta. 1 para SIM ou 2 para NÃO.');
}

switch (resposta) {
    case '1':
        console.log('Muito bom! Continue estudando e você terá muito sucesso.');
        break;
    case '2':
        console.log('Ahh que pena... Já tentou aprender outras linguagens?');
        break;
}