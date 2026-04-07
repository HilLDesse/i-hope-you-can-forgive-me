const decorationsContainer = document.getElementById('decorations');

function createDecorations() {
    const emojis = ['🤍', '✨', '🫧', '🌸', '🩷'];
    const count = 25; 

    for (let i = 0; i < count; i++) {
        const decor = document.createElement('div');
        decor.classList.add('heart-decor');
        decor.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        decor.style.left = Math.random() * 100 + 'vw';
        decor.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
        
        decor.style.animationDuration = (Math.random() * 5 + 6) + 's';
        decor.style.animationDelay = (Math.random() * 5) + 's';

        decorationsContainer.appendChild(decor);
    }
}

window.onload = createDecorations;