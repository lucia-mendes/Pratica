let navBar = document.querySelector('#header')
document.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }
})

// JavaScript da barra transparente


// quando clicar em um dos elementos do menu ele vai até a sua descrição
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, 
                behavior: 'smooth'
            });
        }
    });
});