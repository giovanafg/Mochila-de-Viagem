//variável --capturar elemento
const form = document.getElementById("novoItem")


//operação de um formulário sendo enviado 

/* -abaixo será criado um addEventListener ---permite que você configure funções a serem chamadas quando um evento específico acontece
 
   -quando acontece o evento, que no caso é o submit, é executado uma função*/

addEventListener("submit", (evento)=> {
    //preventDefault() interrompe o comportamento 
    evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})


function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)
}