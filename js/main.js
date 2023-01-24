//variável "novoItem" --capturar elemento
//O que é uma const? O valor de uma constante não pode ser alterado por uma atribuição, e ela não pode ser redeclarada.
const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = []


//operação de um formulário sendo enviado 

//abaixo será criado um addEventListener ---permite que você configure funções a serem chamadas quando um evento específico acontece
//quando acontece o evento, que no caso é o submit, é executado uma função
addEventListener("submit", (evento)=> {
    //preventDefault() interrompe o comportamento 
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    //para o campo ficar em branco quando for apertado o botao, precisamos indicar que o campo precisa ficar vazio
    nome.value = ""
    quantidade.value = ""
})


//para conseguirmos ir adicionando o nome e quantidade na nossa lista, precisamos criar um novo elemento
function criaElemento(nome, quantidade) {
    //<li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    //appenchild significa acrescentar em uma lista
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    const lista = document.getElementById("lista")

    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("item", JSON.stringify(itens))
}



