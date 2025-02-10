document.addEventListener("DOMContentLoaded", function () {
    const botaoAlternar = document.getElementById("botao-alternar");
    const container = document.querySelector(".container");
    const titulo = document.getElementById("titulo");
    const descricao = document.getElementById("descricao");
    const formCadastro = document.getElementById("form-cadastro");
    const formLogin = document.getElementById("form-login");
    const painelDireito = document.querySelector(".painel-direito");
    const botaoCadastro = document.getElementById("botao-cadastro");

botaoCadastro.addEventListener("click", function () {
    modoLogin = false; // Garantir que estamos no modo de cadastro
    container.classList.remove("modo-login");

    titulo.textContent = "Bem-vindo de volta!";
    descricao.textContent = "Já tem uma conta? Faça login agora.";
    botaoAlternar.textContent = "Login";

    formCadastro.classList.remove("oculto");
    formLogin.classList.add("oculto");

    painelDireito.style.display = "none"; // Esconder o painel direito
});

    let modoLogin = false; // Começa no cadastro

    botaoAlternar.addEventListener("click", function () {
        console.log("Antes:", modoLogin); // Verificar o estado antes da mudança

        modoLogin = !modoLogin; // Inverte o estado

        console.log("Depois:", modoLogin); // Verificar o estado depois da mudança

        container.classList.toggle("modo-login");

        if (modoLogin) {
            // Modo Login ativado
            titulo.textContent = "Olá, bem-vindo!";
            descricao.textContent = "Não tem uma conta? Cadastre-se agora.";
            botaoAlternar.textContent = "Cadastrar";
            formCadastro.classList.add("oculto");
            formLogin.classList.remove("oculto");

            // Mostrar painel direito
            painelDireito.style.display = "flex";
        } else {
            // Modo Cadastro ativado
            titulo.textContent = "Bem-vindo de volta!";
            descricao.textContent = "Já tem uma conta? Faça login agora.";
            botaoAlternar.textContent = "Login";
            formCadastro.classList.remove("oculto");
            formLogin.classList.add("oculto");

            // Esconder painel direito
            painelDireito.style.display = "none";
        }
    });
});





//Validação do formulário

document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.getElementById("form-cadastro");
    const formLogin = document.getElementById("form-login");

    // Captura os campos do formulário de cadastro
    const nomeInput = formCadastro.querySelector("input[type='text']");
    const emailInput = formCadastro.querySelector("input[type='email']");
    const senhaInput = formCadastro.querySelector("input[type='password']");

    // Captura os campos do formulário de login
    const loginUsuarioInput = formLogin.querySelector("input[type='text']");
    const loginSenhaInput = formLogin.querySelector("input[type='password']");

    // Expressão regular para validar apenas *letras (com acentos) e espaços*
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    // Adiciona um evento de *submissão* no formulário de cadastro
    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault(); // Previne o envio do formulário sem validação

        // Obtém os valores dos campos
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

        // Valida o nome (não pode conter números, símbolos ou e-mails)
        if (!regexNome.test(nome)) {
            alert("O nome deve conter apenas letras e espaços, sem números ou símbolos.");
            return;
        }

        // Valida o e-mail (formato correto)
        if (!validateEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        // Valida a senha (mínimo de 6 caracteres)
        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        // Se todas as validações passarem, o formulário é enviado (simulado aqui)
        alert("Cadastro realizado com sucesso!");
        formCadastro.reset(); // Limpa os campos do formulário
    });

    // Adiciona um evento de *submissão* no formulário de login
    formLogin.addEventListener("submit", function (event) {
        event.preventDefault(); // Previne o envio sem validação

        // Obtém os valores dos campos
        const usuario = loginUsuarioInput.value.trim();
        const senha = loginSenhaInput.value.trim();

        // Valida se os campos foram preenchidos
        if (usuario === "" || senha === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Simulação de login (poderia ser enviado para um backend)
        alert("Login realizado com sucesso!");
        formLogin.reset(); // Limpa os campos do formulário
    });

    // Função para validar e-mails usando expressão regular
    function validateEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }
});