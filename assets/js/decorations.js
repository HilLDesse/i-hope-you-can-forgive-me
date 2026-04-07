const decorationsContainer = document.getElementById('decorations');

// 1. Fungsi Hati Mengambang (Background Default)
function createDecorations() {
    const emojis = ['🤍', '🌸', '🩷', '✨', '🫧'];
    const count = 20; // Disesuaikan agar tidak berat di HP

    for (let i = 0; i < count; i++) {
        const decor = document.createElement('div');
        decor.classList.add('heart-decor');
        decor.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        decor.style.left = Math.random() * 100 + 'vw';
        decor.style.fontSize = (Math.random() * 1.2 + 0.8) + 'rem';
        
        decor.style.animationDuration = (Math.random() * 5 + 7) + 's';
        decor.style.animationDelay = (Math.random() * 5) + 's';

        decorationsContainer.appendChild(decor);
    }
}

// 2. Fungsi Interaktif: Ledakan Hati saat Layar Ditekan
function createClickBurst(x, y) {
    const emojis = ['🩷', '🤍', '✨'];
    const burstCount = 5; // Jumlah hati yang muncrat setiap klik

    for (let i = 0; i < burstCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('click-heart');
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Posisikan di titik klik
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';

        // Arah ledakan acak menggunakan CSS variables
        const tx = (Math.random() - 0.5) * 100 + 'px';
        const ty = (Math.random() - 0.5) * 100 - 50 + 'px'; // Cenderung ke atas
        const rot = Math.random() * 360 + 'deg';
        
        heart.style.setProperty('--tx', tx);
        heart.style.setProperty('--ty', ty);
        heart.style.setProperty('--rot', rot);

        document.body.appendChild(heart);

        // Hapus elemen setelah animasi selesai (1 detik)
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

// Deteksi Sentuhan di HP
document.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    createClickBurst(touch.clientX, touch.clientY);
});

// Deteksi Klik di PC/Laptop
document.addEventListener('click', function(e) {
    // Abaikan jika yang diklik adalah textarea (biar gak terganggu saat ngetik)
    if(e.target.tagName.toLowerCase() !== 'textarea') {
        createClickBurst(e.clientX, e.clientY);
    }
});

// Jalankan saat load
window.onload = createDecorations;