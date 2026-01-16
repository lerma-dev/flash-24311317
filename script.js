document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const btn = document.getElementById('speed-btn');

    setTimeout(() => {
        container.classList.add('show-content');
    }, 300);

    btn.addEventListener('click', () => {
        document.body.style.animation = "shake 0.2s infinite";
        
        btn.innerText = "¡CORRIENDO!";
        
        setTimeout(() => {
            document.body.style.animation = "none";
            btn.innerText = "¡ACTIVAR VELOCIDAD!";
            alert("¡Has entrado en la Speed Force!");
        }, 1000);
    });
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    40% { transform: translate(3px, 2px) rotate(-1deg); }
    60% { transform: translate(-1px, -1px) rotate(1deg); }
    80% { transform: translate(-3px, 1px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}`;
document.head.appendChild(style);