let alunos = [];

function cadastrarAluno() {
    const nome = document.getElementById("nome").value;
    const nota = parseFloat(document.getElementById("nota").value);

    if (nome === "" || isNaN(nota)) {
        alert("Preencha os campos corretamente");
        return;
    }

    const aluno = {
        nome: nome,
        nota: nota
    };

    alunos.push(aluno);
    document.getElementById("nome").value = "";
    document.getElementById("nota").value = "";
    exibirAlunos(alunos);
}

function exibirAlunos(lista) {
    const ul = document.getElementById("listaAlunos");
    ul.innerHMTL = "";
    lista.forEach(aluno => {
        const li = document.createElement("li");
        li.textContent = `${aluno.nome} - Nota: ${aluno.nota}`;

        if (aluno.nota >= 7) {
            li.classList.add("aprovado");
        }
        else {
            li.classList.add("reprovado");
        }

        ul.appendChild(li);
    });
}

function filtrar(tipo) {
    if (tipo === "aprovados") {
        exibirAlunos(alunos.filter(a => a.nota >= 7));
    }
    else if (tipo === "reprovados") {
         exibirAlunos(alunos.filter(a => a.nota <= 7));
    }
    else {
        exibirAlunos(alunos);
    }
}

function cancelarCadastro() {
    document.getElementById("nome").value = "";
    document.getElementById("nota").value = "";

    document.getElementById("listaAlunos".innerHMTL = "")
    alunos = [];

    alert("Cadastro Cancelado!");
}