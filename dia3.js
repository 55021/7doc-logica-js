let escolha = prompt(`Você quer seguir como Front-end ou Back-end?
Digite 1 para Front-end e 2 para Back-end.`);

while (!(escolha == "1" || escolha == "2")) {
  escolha = prompt(`Por favor, digite uma resposta.
  1 para Front-end ou 2 para Back-end.`);
}

if (escolha == "1") {
  var front = prompt(`Você deseja aprender React ou Vue?`);
  var xEnd = "Front-end";
} else {
  var back = prompt(`Você deseja aprender C# ou Java?`);
  var xEnd = "Back-end";
}

let continuar = prompt(`Que maneiro! E aí, você vai se especializar nesse caminho, ou quer virar Fullstack?
Digite 1 para seguir como ${xEnd} ou digite 2 para tornar-se Fullstack.`);

while (!(continuar == "1" || continuar == "2")) {
  continuar = prompt(`Por favor, digite uma resposta.
    1 para seguir como ${xEnd} ou 2 para virar Fullstack.`);
}

const tecnologias = [];

if (continuar == "1") {
  let resposta = prompt(`Que legal que você quer se especializar no que curte! E me diz aí, qual tecnologia de ${xEnd} você mais tem interesse em aprender?`);
  tecnologias.push(resposta);
  let resposta2 = prompt(`${resposta}? Parece bem legal, te desejo sucesso!
    Tem mais alguma tecnologia que você gostaria de aprender? Digite OK se tiver.`);
  while (resposta2.toLowerCase() == "ok") {
    let resposta3 = prompt(`Qual é a outra tecnologia que você se interessa?`);
    tecnologias.push(resposta3);
    resposta2 = prompt(`${resposta3}? Parece bem legal, te desejo sucesso!
    Tem mais alguma tecnologia que você gostaria de aprender? Digite OK se tiver.`);
  }
  alert(`Legal, então você quer aprender ${tecnologias}... Já vejo que vai conseguir! Bons estudos.`);
} else {
  let resposta = prompt(`Então você vai virar Fullstack! Muito legal. E qual tecnologia você tem interesse em aprender primeiro?`).toLowerCase;
  tecnologias.push(resposta);
  let resposta2 = prompt(`${resposta}? Parece bem legal, te desejo sucesso!
    Tem mais alguma tecnologia que você gostaria de aprender? Digite OK se tiver.`);
  while (resposta2.toLowerCase() == "ok") {
    let resposta3 = prompt(`Qual é a outra tecnologia que você se interessa?`);
    tecnologias.push(resposta3);
    resposta2 = prompt(`${resposta3}? Parece bem legal, te desejo sucesso!
    Tem mais alguma tecnologia que você gostaria de aprender? Digite OK se tiver.`);
  }
  alert(`Legal, então você quer aprender ${tecnologias}... Já vejo que vai conseguir! Bons estudos.`);
}
