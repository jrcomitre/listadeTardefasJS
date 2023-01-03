// Referenciar o input
let input = document.querySelector('input[name=tarefa');

let card = document.querySelector('.card');


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

    //Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';

    for (tarefa of tarefas) {
        // Criar o item da lista
        let itemLista = document.createElement('li');

        //Adicionar classes no item da lista
        itemLista.setAttribute('class', "list-group-item list-group-item-action");

        // Adicionar evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

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

// "Escutar" o evento de clique no botão
btn.onclick = function(){
    // Capturar o valor digitado pelo usuário no input
    let novaTarefa = input.value;

    if(novaTarefa !== ""){
    
        // Atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
        tarefas.push(novaTarefa);

        //Executando a função e renderizando na tela
        renderizarTarefas();

        //Limpar o input
        input.value = "";

        //limpar mensagens de erro (spans)
        removerSpan();
    
    }else{

        //Limpar mensagem de erro(spans)
        removerSpan();                

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        //Adicionar mensagem como filho de span
        span.appendChild(msg);

        // Adicionar span no card
        card.appendChild(span);

        
    }
};

//Remover span (aviso de preenchimento)
function removerSpan(){
    let spans = document.querySelectorAll('span');    

    for(let i = 0; i < spans.length; index++) {
        card.removeChild(spans[i]);        
    }

}

function deletarTarefa(tar){
    //Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    //Renderiza a tela
    renderizarTarefas();

}



