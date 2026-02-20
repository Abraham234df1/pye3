// 🟣 LOADER ANIMATION: HOLLOW PURPLE
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-overlay');
    // Forzamos un tiempo de 2.5s para que se vea la animación completa
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800); // Esperar a que termine la transición de opacidad
    }, 2500); 
});
