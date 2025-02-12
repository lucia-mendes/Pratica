//Para pré-visualizar a foto
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


//Validação do Formulário
// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Seleciona o formulário
    const fotoInput = document.getElementById("ifoto"); // Seleciona o campo de upload de foto
    const previewImg = document.getElementById("preview"); // Seleciona a imagem de pré-visualização

    // Adiciona um evento de submissão ao formulário
    form.addEventListener("submit", function (event) {
        let valid = true; // Variável para controlar a validade do formulário
        let mensagensErro = []; // Lista para armazenar mensagens de erro

        // Função auxiliar para validar campos obrigatórios
        function validarCampo(id, mensagem) {
            const campo = document.getElementById(id); // Obtém o campo pelo ID
            if (!campo.value.trim()) { // Verifica se o campo está vazio
                mensagensErro.push(mensagem); // Adiciona a mensagem de erro
                campo.style.border = "2px solid red"; // Destaca o campo com borda vermelha
                valid = false; // Define o formulário como inválido
            } else {
                campo.style.border = ""; // Remove a borda vermelha se o campo estiver correto
            }
        }

        // Chamadas da função validarCampo para verificar os campos obrigatórios
        validarCampo("idata", "Ano Lectivo é obrigatório.");
        validarCampo("iclasse", "Classe é obrigatória.");
        validarCampo("icurso", "Curso é obrigatório.");
        validarCampo("inome", "Nome completo do aluno é obrigatório.");
        validarCampo("ipai", "Nome do pai é obrigatório.");
        validarCampo("imae", "Nome da mãe é obrigatório.");
        validarCampo("inatu", "Naturalidade é obrigatória.");
        validarCampo("idataNasc", "Data de nascimento é obrigatória.");
        validarCampo("ibilhete", "Número do BI/Cédula é obrigatório.");
        validarCampo("iresi", "Residência é obrigatória.");
        validarCampo("imuni", "Município é obrigatório.");
        validarCampo("itel", "Número de telefone é obrigatório.");
        validarCampo("iestab", "Nome da escola anterior é obrigatório.");
        validarCampo("icurs", "Curso pretendido é obrigatório.");
        validarCampo("ienca", "Nome do Encarregado de Educação é obrigatório.");
        
        // Validação específica para o número do BI/Cédula
        const bilhete = document.getElementById("ibilhete").value;
        if (bilhete.length < 12 || bilhete.length > 15) { // Verifica se o número tem entre 12 e 15 caracteres
            mensagensErro.push("O número do BI deve ter entre 12 e 15 dígitos.");
            document.getElementById("ibilhete").style.border = "2px solid red"; // Adiciona borda vermelha
            valid = false;
        }

        // Validação específica para telefone (mínimo 9 caracteres)
        const telefone = document.getElementById("itel").value;
        if (telefone.length < 9) { // Verifica se o telefone tem pelo menos 9 dígitos
            mensagensErro.push("O telefone deve ter pelo menos 9 dígitos.");
            document.getElementById("itel").style.border = "2px solid red";
            valid = false;
        }

        // Validação do upload da foto (deve ser obrigatório)
        if (!fotoInput.files.length) { // Verifica se o campo de arquivo está vazio
            mensagensErro.push("O envio da foto é obrigatório.");
            fotoInput.style.border = "2px solid red"; // Adiciona borda vermelha
            valid = false;
        } else {
            fotoInput.style.border = ""; // Remove borda vermelha caso o campo esteja preenchido
        }

        // Se houver erros, impede o envio do formulário e exibe um alerta com os erros encontrados
        if (!valid) {
            event.preventDefault(); // Impede o envio do formulário
            alert("Erros encontrados:\n" + mensagensErro.join("\n")); // Exibe os erros em formato de alerta
        }
    });

    // Evento para pré-visualizar a imagem ao fazer upload
    fotoInput.addEventListener("change", function () {
        const file = this.files[0]; // Obtém o arquivo selecionado
        if (file) {
            const reader = new FileReader(); // Cria um objeto para ler o arquivo
            reader.onload = function (e) { 
                previewImg.src = e.target.result; // Define a imagem de pré-visualização
            };
            reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
        }
    });
});