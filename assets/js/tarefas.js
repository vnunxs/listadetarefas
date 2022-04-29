const criarTarefa = (evento) =>{
    evento.preventDefault()
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    lista.appendChild(tarefa)
    input.value = " "
    /*criando o botão dentro de <li> */
    tarefa.appendChild(botao())
    tarefa.appendChild(botaoDeleta())
}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click',(criarTarefa))

const botao = () => {
    /*criando a tag button */ 
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerHTML = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
}

const concluirTarefa = (evento) => { 

    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}


/*resolução do exercicio */ 
const botaoDeleta = () =>{
    const deletaBotao = document.createElement('button')
    deletaBotao.classList.add('.delete-button')
    deletaBotao.innerHTML = 'deletar'
    deletaBotao.addEventListener('click',deletarTarefa)

    return deletaBotao
}

const deletarTarefa = (evento) =>{
    const deletarBotao = evento.target
    const tarefaCompleta = deletarBotao.parentElement
    tarefaCompleta.remove()

    return deletarBotao
}