const selectEl = document.querySelector("#filtro-da-foto");

selectEl.addEventListener("change", e => {
    const fotoEl = document.querySelector(".foto-anotada > img");

    fotoEl.style.filter = e.currentTarget.value;
});