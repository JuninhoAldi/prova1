function paginaB(){
    window.location.href = "paginaB.html";
}

let receitas = JSON.parse(localStorage.getItem("receitas")) || [];

function salvarReceita(){
    localStorage.setItem('receitas', JSON.stringify(receitas));
}

function enviar(){
    const nome = document.getElementById("nome").value;
    const ingredientes = document.getElementById("ingredientes").value;
    const preparo = document.getElementById("preparo").value;
    const tempo = document.getElementById("tempo").value;
    const categoria = document.getElementById("categoria").value;

    const receita = {
        nome: nome,
        ingredientes: ingredientes,
        preparo: preparo,
        tempo: tempo,
        categoria: categoria
    };

    receitas.push(receita);
    salvarReceita();

    document.getElementById("nome").value = "";
    document.getElementById("ingredientes").value = "";
    document.getElementById("preparo").value = "";
    document.getElementById("tempo").value = "";
    document.getElementById("categoria").value = "";

    alert('Receita adicionada com Sucesso!');
    
}