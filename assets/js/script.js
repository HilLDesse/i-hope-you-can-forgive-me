const introScene = document.getElementById('intro-scene');
const mainScene = document.getElementById('main-scene');
const successScene = document.getElementById('success-scene');

const btnOpen = document.getElementById('btn-open');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

// 1. Logika Klik 'Buka Pesan Kasih Sayang' (Dari Scene 1 ke Scene 2)
btnOpen.addEventListener('click', () => {
    introScene.classList.remove('visible');
    introScene.classList.add('hidden');
    
    setTimeout(() => {
        introScene.style.display = 'none';
        mainScene.style.display = 'block';
        setTimeout(() => {
            mainScene.classList.remove('hidden');
            mainScene.classList.add('visible');
        }, 50);
    }, 800);
});

// 2. Logika Klik 'Iya, Aku Maafin' (Dari Scene 2 ke Scene 3)
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

// 3. Logika Tombol 'Gak Mau' Lari / Menghindar
btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', moveButton);

function moveButton() {
    btnNo.style.transition = 'all 0.1s ease'; 
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    // Batasi area kabur agar tidak keluar dari layar
    const randomX = Math.floor(Math.random() * (windowWidth - btnWidth - 100)) + 50;
    const randomY = Math.floor(Math.random() * (windowHeight - btnHeight - 100)) + 50;

    btnNo.style.position = 'fixed'; 
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}