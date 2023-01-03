// Referenciar o input
let input = document.querySelector('input[name=tarefa');


// Referenciar o Button
let btn = document.querySelector('#botao');


// Referenciar a lista Adicionar tarefas
let lista = document.querySelector('#lista');

let tarefas = [
    'Jogar GTA',
    'Estudar Python',
    'Estudar React',
    'Estudar Inglês',
    'Assistir Filme'
];

function renderizarTarefas() {
    for (tarefa of tarefas) {
        // Criar o item da lista
        let itemLista = document.createElement('li');

        //Adicionar classes no item da lista
        itemLista.setAttribute('class', "list-group-item list-group-item-action");

        //Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        //Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        //Adicionar o item da lista na lista
        lista.appendChild(itemLista);

    }
}

// Executando a função para renderizar tarefas
renderizarTarefas();