
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        let errorMessage = "";

        // Seleciona todos os inputs obrigatórios
        const requiredInputs = form.querySelectorAll("input[required]");

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                errorMessage += ⚠ O campo "${input.previousElementSibling.innerText}" é obrigatório.\n;
                input.classList.add("erro"); // Adiciona uma classe para destacar o erro
            } else {
                input.classList.remove("erro"); // Remove a classe se corrigido
            }
        });

        // Validação específica para Número do B.I
        const bilhete = document.getElementById("ibilhete");
        if (bilhete.value.length < 12 || bilhete.value.length > 15) {
            isValid = false;
            errorMessage += "⚠ O Número do B.I deve ter entre 12 e 15 dígitos.\n";
            bilhete.classList.add("erro");
        }

        // Validação para Telefone
        const telefone = document.getElementById("itel");
        if (telefone.value.length < 9) {
            isValid = false;
            errorMessage += "⚠ O Telefone deve ter pelo menos 9 dígitos.\n";
            telefone.classList.add("erro");
        }

        // Se houver erros, impede o envio e exibe os avisos
        if (!isValid) {
            event.preventDefault();
            alert(errorMessage);
        }
    });

    // Função para pré-visualizar a foto do aluno
    const fotoInput = document.getElementById("ifoto");
    const preview = document.getElementById("preview");

    fotoInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });
});