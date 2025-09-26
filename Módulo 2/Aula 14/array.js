let listaTimes = ["Santos🖕", "São Paulo🖕", "Palmeiras🖕"];

//Acessando Itens do Array
console.log(listaTimes[0]);
console.log(listaTimes[1]);
console.log(listaTimes[2]);

//Adicionando Itens
listaTimes.push("Ponte Preta🤏");
listaTimes.push("Flamengo🤏");
console.log(listaTimes);

//Verificar o tamanho da lista
console.log(listaTimes.length);

//Adicionar um item na primeira posição
listaTimes.unshift("Fluminense🤏");
listaTimes.unshift("Vasco🤌");
console.log(listaTimes);

//Removendo um item do início do array
listaTimes.shift();
console.log(listaTimes);

//Remover o ultimo elemento do array
listaTimes.pop();
console.log(listaTimes);

// Encontrar a posição de um item

console.log(listaTimes.indexOf("Santos"));


let listaNomes = ["Marcus", "Diego", "Camila", "Matheus"];

listaNomes.splice(3,1); // Matheus foi removido
console.log(listaNomes);

//Alterando itens
listaNomes.splice(1,1, "Robson","Edivan");
console.log(listaNomes);

//Adicionando itens
listaNomes.splice(2,0, "Gabriel", "Diogo");
console.log(listaNomes);

//


