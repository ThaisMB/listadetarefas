let botaoCriaTarefa = document.querySelector("#botao-adiciona-tarefa");
botaoCriaTarefa.addEventListener("click", criarTarefa);
const tarefas= [];
const tarefasConcluidas=[];

function criarTarefa(evento){
    evento.preventDefault();
    let entrada= document.querySelector(".adiciona-tarefa").value;
    if (entrada.length==0){
        alert("Digite uma tarefa no formulário!");
        return
    }

    if (tarefasConcluidas.includes(entrada)){
        let resposta =confirm("Você já concluiu essa tarefa. Deseja recolocá-la na lista?")
        if (resposta==false){
            return
        }
    }
    
    if (tarefas.includes(entrada)){
        alert("Você já adicionou essa tarefa!")
        return
    } else{
        tarefas.push(entrada);
    }

    

    let listaTarefas = document.querySelector(".lista-tarefas");

    const botoes = document.createElement("div");
    botoes.classList.add("botoes-checar");
    const botaoDeleta = document.createElement("button");
    botaoDeleta.addEventListener("click", deletar);
    botaoDeleta.innerHTML = "deletar";
    
    const botaoConclui = document.createElement("button");
    botaoConclui.addEventListener("click", concluir);
    botaoConclui.innerHTML = "concluir";
        

    let tarefa = document.createElement("li");
    const conteudo = `<p class='content'>${entrada}</p>`;
    tarefa.innerHTML=conteudo;
    listaTarefas.appendChild(tarefa);

    botoes.appendChild(botaoConclui);
    botaoConclui.classList.add("botao-checar");

    botoes.appendChild(botaoDeleta);
    botaoDeleta.classList.add("botao-checar");
    tarefa.appendChild(botoes); 
    
    document.querySelector(".adiciona-tarefa").value = "";

    document.querySelector(".adiciona-tarefa").focus();
}

function deletar(evento){
    const botaoDeleta = evento.target;
    const tarefaDeletada = botaoDeleta.parentElement.parentElement;
    const tarefa = evento.target.parentElement.parentElement.querySelector('p').innerText;
    const index = tarefas.indexOf(tarefa);
    delete tarefas[index];
    tarefaDeletada.remove();
}

function concluir(evento){
    const botaoConclui = evento.target;
    const tarefaConcluida = botaoConclui.parentElement.parentElement;
    tarefaConcluida.classList.toggle("concluida");
    const tarefa = evento.target.parentElement.parentElement.querySelector('p').innerText;
    tarefasConcluidas.push(tarefa);
    const indice= tarefas.indexOf(tarefa);
    delete tarefas[indice];
}
