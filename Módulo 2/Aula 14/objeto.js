let produto = {
    nome: "Computador",
    fabricante: "Positivo",
    preco: 2300,
    processador: "I3-2100"
}

// Acessando um item no objeto
console.log(produto.nome)
console.log(produto["nome"])

//Adicionar um item no objeto
produto.armazenamento = "256gb"
produto["memoria Ram"] = "8gb"
console.log(produto);

// Remover um elemento
delete produto.armazenamento
delete produto["memoria RAM"]
console.log(produto);