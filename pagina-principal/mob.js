let btnMenuMob = document.querySelector('#btn-menu-mob');
let line1 = document.querySelector('.line-menumob-1');
let line2 = document.querySelector('.line-menumob-2');
let menuMobile = document.querySelector('#menu-mobile');
let body = document.querySelector('body');
let menuLinks = document.querySelectorAll('.menu-mobile nav ul li a'); // Seleciona todos os links do menu mobile

btnMenuMob.addEventListener("click", () => {
    toggleMenu();
});

// Função para abrir/fechar o menu mobile
function toggleMenu() {
    line1.classList.toggle('ativo1');
    line2.classList.toggle('ativo2');
    menuMobile.classList.toggle('abrir');
    body.classList.toggle('no-overflow');
}

menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        let href = link.getAttribute("href"); // Obtém o destino do link
        if (href && href !== "#") {
            event.preventDefault(); // Impede a navegação imediata
            setTimeout(() => {
                window.location.href = href; // Redireciona após um curto intervalo
            }, 300); // 300ms para dar tempo da animação do menu terminar
        }
        toggleMenu();
    });
});