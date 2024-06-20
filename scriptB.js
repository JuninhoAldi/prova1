function paginaA() {
    window.location.href = "paginaA.html";
}

let receitas = JSON.parse(localStorage.getItem("receitas")) || [];
let receitaIndex = null;

function exibirReceitas() {
    const container = document.getElementById("receitasContainer");
    container.innerHTML = ""; // Limpa o container antes de exibir as receitas

    receitas.forEach((receita, index) => {
        const receitaDiv = document.createElement("div");
        receitaDiv.classList.add("receita");

        receitaDiv.innerHTML = `
            <h2>${receita.nome}</h2>
            <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
            <p><strong>Preparo:</strong> ${receita.preparo}</p>
            <p><strong>Tempo de Preparo:</strong> ${receita.tempo} minutos</p>
            <p><strong>Categoria:</strong> ${receita.categoria}</p>
            <button onclick="abrirModal(${index})">Editar</button>
            <button onclick="excluirReceita(${index})">Excluir</button>
        `;

        container.appendChild(receitaDiv);
    });
}

function abrirModal(index) {
    receitaIndex = index;
    const receita = receitas[index];

    document.getElementById("editNome").value = receita.nome;
    document.getElementById("editIngredientes").value = receita.ingredientes;
    document.getElementById("editPreparo").value = receita.preparo;
    document.getElementById("editTempo").value = receita.tempo;
    document.getElementById("editCategoria").value = receita.categoria;

    document.getElementById("editModal").style.display = "block";
}

function fecharModal() {
    document.getElementById("editModal").style.display = "none";
}

function salvarEdicao() {
    const nome = document.getElementById("editNome").value;
    const ingredientes = document.getElementById("editIngredientes").value;
    const preparo = document.getElementById("editPreparo").value;
    const tempo = document.getElementById("editTempo").value;
    const categoria = document.getElementById("editCategoria").value;

    receitas[receitaIndex] = { nome, ingredientes, preparo, tempo, categoria };
    salvarReceitas();
    exibirReceitas();
    fecharModal();
}

function excluirReceita(index) {
    receitas.splice(index, 1);
    salvarReceitas();
    exibirReceitas();
}

function salvarReceitas() {
    localStorage.setItem('receitas', JSON.stringify(receitas));
}

document.addEventListener("DOMContentLoaded", exibirReceitas);
