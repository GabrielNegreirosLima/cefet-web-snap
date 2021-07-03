// Exercício 0
const checkEl = document.querySelector("#visibilidade-das-marcacoes");
const bodyEl = document.body;

checkEl.addEventListener("change", e => {
    checkEl.checked ?
        bodyEl.classList.add(e.currentTarget.value) :
        bodyEl.classList.remove(e.currentTarget.value);
});


// Megaexercicio 2 e Megaexercício 3
// Aqui ficam as variáveis que vão conter os elementos tanto do contexto
// do megaexercício 2 quanto do 3
const xEl = document.querySelector("#x-da-marcacao");
const yEl = document.querySelector("#y-da-marcacao");
const larguraEl = document.querySelector("#largura-da-marcacao");
const alturaEl = document.querySelector("#altura-da-marcacao");
const tituloEl = document.querySelector("#titulo-da-marcacao");
const conteudoEl = document.querySelector("#conteudo-da-marcacao");
const corEl = document.querySelector("#cor-da-marcacao");

// Mega exercício 2
let marcacoes2 = document.querySelectorAll(".marcacao");
marcacoes2.forEach(el => {
    el.addEventListener("click", atualizaControles);
});

function atualizaControles(e){
    const marcacaoSelecionada = e.currentTarget;
    const marcacaoAntiga = document.querySelector(".selecionada");
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

// Megaexercício 3
const formatos = document.querySelectorAll("[name='formato-da-marcacao']");

xEl.addEventListener("input", e => {
    const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");
    const value = e.currentTarget.value;

    marcacaoSelecionada.style.left=`${value}px`;
});

yEl.addEventListener("input", e => {
    const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");
    const value = e.currentTarget.value;

    marcacaoSelecionada.style.top=`${value}px`;
});

larguraEl.addEventListener("input", e => {
    const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");
    const value = e.currentTarget.value;

    marcacaoSelecionada.style.width=`${value}px`;
});

alturaEl.addEventListener("input", e => {
    const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");
    const value = e.currentTarget.value;

    marcacaoSelecionada.style.height=`${value}px`;
});

tituloEl.addEventListener("input", e => {
    const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");
    const value = e.currentTarget.value;

    marcacaoSelecionada.dataset.titulo=value;
});

conteudoEl.addEventListener("input", e => {
    const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");
    const value = e.currentTarget.value;

    marcacaoSelecionada.dataset.conteudo=value;
});

corEl.addEventListener("input", e => {
    const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");
    const value = e.currentTarget.value;

    marcacaoSelecionada.dataset.cor=value;
});

formatos.forEach(formatoEl =>{
    const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");

    formatoEl.addEventListener("input", e => {
        const formato = e.currentTarget.value;
        
        if(formato === "formato-oval"){
            marcacaoSelecionada.classList.add("formato-oval");
            marcacaoSelecionada.classList.remove("formato-retangular"); 
            return;
        }

        marcacaoSelecionada.classList.add("formato-retangular"); 
        marcacaoSelecionada.classList.remove("formato-oval");
    });
});