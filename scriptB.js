function paginaA(){
    window.location.href = "paginaA.html";
}

let receitas = JSON.parse(localStorage.getItem("receitas")) || [];

function exibirReceitas(){
    const container = document.getElementById("receitasContainer");
    container.innerHTML = "";

    receitas.forEach((receita, index) =>{
        const receitaDiv = document.createElement("div");
        receitaDiv.classList.add("receita");

        receitaDiv.innerHTML = `
        <h2>${receita.nome}</h2>
        <p>Ingredientes: ${receita.ingredientes}</p>
        <p>Preparo: ${receita.preparo}</p>
        <p>Tempo de Preparo: ${receita.tempo}</p>
        <p>Categoria: ${receita.categoria}</p>
        <button onclick= "editarReceita(${index})">Editar</button>
        <button onclick= "excluirReceita(${index})">Excluir</button>
        `;

        container.appendChild(receitaDiv);
    });
}

function editarReceita(index){
    const receita = receitas[index];

    const nome = prompt("Edite o nome da receita: ", receita.nome);
    const ingredientes = prompt("Edite os ingredientes da receita: ", receita.ingredientes);
    const preparo = prompt("Edite o modo de preparo: ", receita.preparo);
    const tempo = prompt("Edite o tempo de preparo: ", receita.tempo);
    const categoria = prompt("Mude a categoria: ", receita.categoria);

    receitas[index] = { nome, ingredientes, preparo, tempo, categoria};
    salvarReceitas();
    exibirReceitas()
}

function excluirReceita(index){
    receitas.splice(index, 1);
    salvarReceitas();
    exibirReceitas();
}

function salvarReceitas(){
    localStorage.setItem('receitas', JSON.stringify(receitas));
}

document.addEventListener("DOMContentLoaded", exibirReceitas);