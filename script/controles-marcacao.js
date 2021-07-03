// Exercício 0
const checkEl = document.querySelector("#visibilidade-das-marcacoes");
const bodyEl = document.body;

checkEl.addEventListener("change", e => {
    checkEl.checked ?
        bodyEl.classList.add(e.currentTarget.value) :
        bodyEl.classList.remove(e.currentTarget.value);
});


// Megaexercicio 2
let marcacoes2 = document.querySelectorAll(".marcacao");
marcacoes2.forEach(el => {
    el.addEventListener("click", atualizaControles);
});

function atualizaControles(e){ 
    const marcacaoSelecionada = e.currentTarget;
    const marcacaoAntiga = document.querySelector(".selecionada");
    const xEl = document.querySelector("#x-da-marcacao");
    const yEl = document.querySelector("#y-da-marcacao");
    const larguraEl = document.querySelector("#largura-da-marcacao");
    const alturaEl = document.querySelector("#altura-da-marcacao");
    const tituloEl = document.querySelector("#titulo-da-marcacao");
    const conteudoEl = document.querySelector("#conteudo-da-marcacao");
    const corEl = document.querySelector("#cor-da-marcacao");
    const formato = marcacaoSelecionada.classList.contains("formato-oval") ? 
                    "formato-oval" : "formato-retangular";
    const formatoEl = document.querySelector(`[value='${formato}']`);
    
    marcacaoAntiga.classList.remove("selecionada");
    marcacaoSelecionada.classList.add("selecionada");

    xEl.value = parseInt(marcacaoSelecionada.style.left);
    yEl.value = parseInt(marcacaoSelecionada.style.top);
    larguraEl.value = parseInt(marcacaoSelecionada.style.width);
    alturaEl.value = parseInt(marcacaoSelecionada.style.height);
    tituloEl.value = marcacaoSelecionada.dataset.titulo;
    conteudoEl.value = marcacaoSelecionada.dataset.conteudo;
    corEl.value = marcacaoSelecionada.dataset.cor;
    formatoEl.checked = true;
}
