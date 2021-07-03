const checkEl = document.querySelector("#visibilidade-das-marcacoes");
const bodyEl = document.body;

checkEl.addEventListener("change", e => {
    checkEl.checked ?
        bodyEl.classList.add(e.currentTarget.value) :
        bodyEl.classList.remove(e.currentTarget.value);
});