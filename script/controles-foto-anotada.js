// Exercicio 4
const selectEl = document.querySelector("#filtro-da-foto");
const fotoEl = document.querySelector(".foto-anotada > img");

selectEl.addEventListener("change", e => fotoEl.style.filter = e.currentTarget.value);

// Desafio
const fileEl = document.querySelector("#imagem");
fileEl.addEventListener("change", e => {
    
    const file = e.target.files[0];
    if (!file.type) {
        console.log("Erro: A propriedade File.type não parece ser suportada neste navegador.");
        return;
    }
    if (!file.type.match('image.*')) {
        console.log("Erro: A imagem selecionada não parece ser uma imagem");
        return;
    }

    const fileReader = new FileReader();
    fileReader.addEventListener("load", e => {
        fotoEl.src = e.target.result;
        console.log("baU BAU")
    });
    fileReader.readAsDataURL(file);
});