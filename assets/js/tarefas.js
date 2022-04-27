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
    
}


// botão
const novaTarefa = document.querySelector('[data-form-button]')

// evento de click
novaTarefa.addEventListener('click',(criarTarefa))