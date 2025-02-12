
document.getElementById("ifoto").addEventListener("change", function(event) {
    const label = document.querySelector(".foto-container label");
    const preview = document.getElementById("preview");

    if (event.target.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block"; // Exibe a imagem
            label.style.display = "none"; // Oculta a label
        };
        reader.readAsDataURL(event.target.files[0]);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Validação do nome completo
        const nome = document.getElementById("inome");
        if (nome.value.trim().length < 20 || nome.value.trim().length > 55) {
            alert("O nome completo deve ter entre 20 e 55 caracteres.");
            isValid = false;
        }

        // Validação do BI
        const bilhete = document.getElementById("ibilhete");
        if (bilhete.value.length < 12 || bilhete.value.length > 15) {
            alert("O número do BI deve ter entre 12 e 15 dígitos.");
            isValid = false;
        }

        // Validação da data de nascimento
        const dataNasc = document.getElementById("idataNasc");
        const dataNascimento = new Date(dataNasc.value);
        const hoje = new Date();
        if (hoje.getFullYear() - dataNascimento.getFullYear() < 5) {
            alert("A idade mínima para inscrição é de 5 anos.");
            isValid = false;
        }

        // Validação do telefone
        const telefone = document.getElementById("itel");
        if (!telefone.value.match(/^\d{9,20}$/)) {
            alert("O telefone deve conter apenas números e ter entre 9 e 20 dígitos.");
            isValid = false;
        }

        // Validação do upload de foto
        const foto = document.getElementById("ifoto");
        if (foto.files.length === 0) {
            alert("Por favor, envie uma foto.");
            isValid = false;
        }

        // Validação da classe pretendida
        const classe = document.getElementById("inscr");
        if (classe.value <= 0 || classe.value > 12) {
            alert("A classe deve estar entre 1 e 12.");
            isValid = false;
        }

        // Validação do encarregado de educação
        const encarregado = document.getElementById("ienca");
        if (encarregado.value.trim().length < 5) {
            alert("O nome do encarregado deve ter pelo menos 5 caracteres.");
            isValid = false;
        }

        // Se alguma validação falhar, impede o envio do formulário
        if (!isValid) {
            event.preventDefault();
        }
    });
});