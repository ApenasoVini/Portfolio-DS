var itens = []
let valor = document.getElementById("arrayCriada")

function adicionar(){
    let itemPraAdd = document.getElementById("display").value
    itens.push(itemPraAdd)
    valor.innerHTML = itens.join(' ')
}

function remover(){
    itens.splice(0, 1)
    valor.innerHTML = itens.join(' ')
}

function alterar(){
    var itemPraAlterar = document.getElementById("display").value
    var posicao = itens.indexOf(itemPraAlterar)
    if (posicao !== -1) {
        var novoItem = prompt("Digite o novo valor para " + itemPraAlterar)
        itens[posicao] = novoItem
    } else {
        alert("O item não foi encontrado na valor.")
    }
    valor.innerHTML = itens.join(' ')
}