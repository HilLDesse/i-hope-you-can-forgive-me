const decorationsContainer = document.getElementById('decorations');

function createDecorations() {
    // Menambahkan variasi emoji romantis
    const emojis = ['❤️', '💖', '🌸', '✨', '🥺', '🌹', '💌'];
    const count = 30; // Jumlah elemen dekorasi

    for (let i = 0; i < count; i++) {
        const decor = document.createElement('div');
        decor.classList.add('heart-decor');
        // Pilih emoji acak
        decor.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Posisi Horizontal & Vertikal acak seluruh layar
        decor.style.left = Math.random() * 100 + 'vw';
        decor.style.top = Math.random() * 100 + 'vh';
        
        // Ukuran acak
        decor.style.fontSize = (Math.random() * 1.7 + 0.9) + 'rem';
        
        // Durasi animasi acak (biar gak gerak barengan)
        decor.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        // Jeda animasi acak
        decor.style.animationDelay = (Math.random() * 6) + 's';

        decorationsContainer.appendChild(decor);
    }
}

// Jalankan fungsi dekorasi saat file ini selesai dimuat total
window.onload = createDecorations;