// Mengambil semua elemen yang dibutuhkan
const introScene = document.getElementById('intro-scene');
const mainScene = document.getElementById('main-scene');
const successScene = document.getElementById('success-scene');

const btnOpen = document.getElementById('btn-open');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

// 1. Logika Klik 'Buka Pesan Kasih Sayang' (Transisi halus dari Scene 1 ke 2)
btnOpen.addEventListener('click', () => {
    // Jalankan animasi keluar
    introScene.classList.remove('visible');
    introScene.classList.add('hidden');
    
    // Siapkan scene 2 tanpa animasi dulu
    mainScene.style.display = 'block';
    
    // Beri sedikit jeda agar animasi keluar CSS berjalan penuh
    setTimeout(() => {
        introScene.style.display = 'none'; // Benar-benar hilangkan Scene 1
        
        // Picu animasi masuk CSS di Scene 2
        setTimeout(() => {
            mainScene.classList.remove('hidden');
            mainScene.classList.add('visible');
        }, 50);
    }, 900); // Durasi disamakan dengan `transition` di animations.css (0.9s)
});

// 2. Logika Klik 'Iya, Aku Maafin' (Transisi halus dari Scene 2 ke 3)
btnYes.addEventListener('click', () => {
    mainScene.classList.remove('visible');
    mainScene.classList.add('hidden');
    
    successScene.style.display = 'block';
    
    setTimeout(() => {
        mainScene.style.display = 'none';
        
        setTimeout(() => {
            successScene.classList.remove('hidden');
            successScene.classList.add('visible');
        }, 50);
    }, 900);
});

// 3. Logika Tombol 'Gak Mau' Lari / Menghindar
btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', moveButton);

function moveButton() {
    // Transisi cepat saat kabur
    btnNo.style.transition = 'all 0.15s ease-out'; 
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    // Batasi area kabur, beri margin 70px agar tidak terlalu mepet pinggir
    const randomX = Math.floor(Math.random() * (windowWidth - btnWidth - 140)) + 70;
    const randomY = Math.floor(Math.random() * (windowHeight - btnHeight - 140)) + 70;

    btnNo.style.position = 'fixed'; // Posisi relatif terhadap layar HP/Komputer
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}