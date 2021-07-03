const balaozinhoEl = document.querySelector("#balaozinho");
let marcacoes = document.querySelectorAll(".marcacao");

marcacoes.forEach(el => {
    el.addEventListener("mouseover", e => {
        const marcacaoEl = e.currentTarget;
        
        balaozinhoEl.style.color = marcacaoEl.dataset.cor;
        balaozinhoEl.innerHTML = 
        `<h2>
            ${marcacaoEl.dataset.titulo}
        </h2>
        <p>
            ${marcacaoEl.dataset.conteudo}
        </p>`
    });

    el.addEventListener("mouseout", el => {
        balaozinhoEl.innerHTML = "";
    })

    el.addEventListener("mousemove", el => {
        balaozinhoEl.style.left = `${el.pageX}px`;
        balaozinhoEl.style.top = `${el.pageY}px`;
    })
});