// =========================
// MENU PARA CELULAR
// =========================

function abrirMenu() {

    const menu = document.getElementById("links");

    menu.classList.toggle("aberto");

}



// =========================
// PESQUISA DE VAGAS
// =========================

function filtrarVagas() {

    const texto =
        document.getElementById("busca").value.toLowerCase();

    const vagas =
        document.querySelectorAll(".card-vaga");


    vagas.forEach(function(vaga) {

        const palavras =
            vaga.dataset.busca.toLowerCase();


        if (palavras.includes(texto)) {

            vaga.style.display = "block";

        } else {

            vaga.style.display = "none";

        }

    });

}



// =========================
// PESQUISAR ENQUANTO DIGITA
// =========================

document
    .getElementById("busca")
    .addEventListener("input", filtrarVagas);



// =========================
// SALVAR PERFIL E REDIRECIONAR
// =========================

function salvarPerfil(event) {
    event.preventDefault();

    // Captura os dados digitados no formulário
    const inputs = document.querySelectorAll(".formulario input");
    
    const dadosPerfil = {
        nome: document.getElementById("nome").value,
        curso: inputs[1] ? inputs[1].value : "",
        habilidades: inputs[2] ? inputs[2].value : "",
        apresentacao: document.querySelector(".formulario textarea").value
    };

    // Salva na memória do navegador
    localStorage.setItem("dadosPerfilOxente", JSON.stringify(dadosPerfil));

    // Redireciona para a tela de personalização
    window.location.href = "editar-perfil.html";
}