const frutas = [];
const vegetais = [];
const congelados = [];
const industrializados = [];
const aleatorio = [];

let inserir = prompt(`Deseja inserir um alimento na sua lista de compras? Digite 1 para SIM e 2 para NÃO.`);

while (inserir == 1 || inserir == 3) {
    if (inserir == 1) {
        let item = prompt(`Qual é o item que você deseja inserir?`);
        let categoria = parseInt(prompt(`A que categoria esse item pertence?
        1 - Frutas.
        2 - Vegetais.
        3 - Congelados.
        4 - Industrializados.
        5 - Outros.`));

        let numeros = [1, 2, 3, 4, 5];

        while (!(numeros.includes(categoria))) {
            categoria = (`Por favor, escolha um número de 1 a 6.
                1 - Frutas.
                2 - Vegetais.
                3 - Congelados.
                4 - Industrializados.
                5 - Outros.`)
        }

        switch(categoria) {
            case 1:
                frutas.push(item);
                break;
            case 2:
                vegetais.push(item);
                break;
            case 3:
                congelados.push(item);
                break;
            case 4:
                industrializados.push(item);
                break;
            case 5:
                aleatorio.push(item);
                break;
            }
        } else {
            let remover = prompt(`Ok, aqui está sua lista de compras:
            Frutas: ${frutas}
            Vegetais: ${vegetais}
            Congelados: ${congelados}
            Industrializados: ${industrializados}
            Outros: ${aleatorio}
            
            Qual item você deseja remover?`);

            let lista = [frutas, vegetais, congelados, industrializados, aleatorio];
            let itensLista = [...frutas, ...vegetais, ...congelados, ...industrializados, ...aleatorio];

            if (itensLista.includes(remover)) {
                lista.forEach(arr => {
                    if (arr.indexOf(remover) != -1) {
                        arr.splice(arr.indexOf(remover), 1);
                    } else {
                        return;
                    };
                })

                alert(`Você removeu ${remover} com sucesso.`);
            } else {
                alert(`${remover} não se encontra na lista de compras. Tem certeza de que era isso?`);
            }
        }
    
    inserir = prompt(`Deseja inserir mais um alimento na sua lista de compras? Digite 1 para SIM, 2 para NÃO e 3 para remover um item da lista.`);

    while (!(inserir == 2 || inserir == 1 || inserir == 3)) {
        inserir = prompt(`Essa opção não é válida. Digite 1 se deseja inserir um item na lista, 2 se não deseja inserir mais nenhum item e 3 para remover um item.`);
    }
}

alert(`Ok, aqui está sua lista de compras:
Frutas: ${frutas}
Vegetais: ${vegetais}
Congelados: ${congelados}
Industrializados: ${industrializados}
Outros: ${aleatorio}`);