const decorationsContainer = document.getElementById('decorations');

function createDecorations() {
    const emojis = ['❤️', '💖', '🌸', '✨', '🥺'];
    const count = 25; // Jumlah elemen dekorasi

    for (let i = 0; i < count; i++) {
        const decor = document.createElement('div');
        decor.classList.add('heart-decor');
        decor.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        decor.style.left = Math.random() * 100 + 'vw';
        decor.style.top = Math.random() * 100 + 'vh';
        decor.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        decor.style.animationDuration = (Math.random() * 3 + 4) + 's';
        decor.style.animationDelay = Math.random() * 5 + 's';

        decorationsContainer.appendChild(decor);
    }
}

// Jalankan fungsi dekorasi saat website pertama kali dibuka
window.onload = createDecorations;