function geraNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numero = geraNumero(1, 10);

let resposta = prompt(`Adivinha o número que eu pensei! De 1 a 10, e você tem 3 chances.`);

for (i = 1; i < 3; i++) {
    if (resposta == numero) {
        alert(`Você adivinhou, era ${numero} mesmo! Parabéns.`);
        break;
    } else {
        resposta = prompt(`Ainda não, tenta de novo.`);
    }
}

if (resposta == numero) {
    alert(`Você adivinhou, era ${numero} mesmo! Parabéns.`);
} else {
    alert(`Poxa, não foi dessa vez. O número certo era ${numero}.`);
}