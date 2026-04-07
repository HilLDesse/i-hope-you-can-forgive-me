// Mengambil semua elemen yang dibutuhkan
const introScene = document.getElementById('intro-scene');
const mainScene = document.getElementById('main-scene');
const successScene = document.getElementById('success-scene');

const btnOpen = document.getElementById('btn-open');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const decorationsContainer = document.getElementById('decorations');

// --- 1. Logika Transisi Halaman ---

// Saat tombol 'Buka Pesan' diklik
btnOpen.addEventListener('click', () => {
    // Sembunyikan cover, munculkan permintaan maaf
    introScene.classList.remove('visible');
    introScene.classList.add('hidden');
    
    // Beri sedikit jeda agar animasi keluar selesai dulu
    setTimeout(() => {
        introScene.style.display = 'none'; // Benar-benar hapus dari layout
        mainScene.style.display = 'block'; // Pasang di layout
        setTimeout(() => {
            mainScene.classList.remove('hidden');
            mainScene.classList.add('visible');
        }, 50); // Jeda kecil untuk memicu CSS transition
    }, 800);
});

// Saat tombol 'Iya, Aku Maafin' diklik
btnYes.addEventListener('click', () => {
    mainScene.classList.remove('visible');
    mainScene.classList.add('hidden');
    
    setTimeout(() => {
        mainScene.style.display = 'none';
        successScene.style.display = 'block';
        setTimeout(() => {
            successScene.classList.remove('hidden');
            successScene.classList.add('visible');
        }, 50);
    }, 800);
});


// --- 2. Logika Tombol 'Gak Mau' yang Lari (Kode Lama) ---
btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', moveButton);

function moveButton() {
    // Tingkatkan kecepatan lari agar lebih seru
    btnNo.style.transition = 'all 0.1s ease'; 

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    // Menentukan posisi acak, beri sedikit margin 50px agar gak terlalu ke pinggir
    const randomX = Math.floor(Math.random() * (windowWidth - btnWidth - 100)) + 50;
    const randomY = Math.floor(Math.random() * (windowHeight - btnHeight - 100)) + 50;

    btnNo.style.position = 'fixed'; // Gunakan fixed agar relatif terhadap layar
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}


// --- 3. Logika Dekorasi Latar Belakang ---
function createDecorations() {
    const emojis = ['❤️', '💖', '🌸', '✨', '🥺'];
    const count = 20; // Jumlah elemen dekorasi

    for (let i = 0; i < count; i++) {
        const decor = document.createElement('div');
        decor.classList.add('heart-decor');
        decor.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Posisi acak di seluruh layar
        decor.style.left = Math.random() * 100 + 'vw';
        decor.style.top = Math.random() * 100 + 'vh';
        
        // Ukuran acak
        decor.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        
        // Durasi dan jeda animasi acak
        decor.style.animationDuration = (Math.random() * 3 + 4) + 's';
        decor.style.animationDelay = Math.random() * 5 + 's';

        decorationsContainer.appendChild(decor);
    }
}

// Jalankan fungsi dekorasi saat website dimuat
window.onload = createDecorations;