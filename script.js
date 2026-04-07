const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const mainContainer = document.getElementById('main-container');
const successContainer = document.getElementById('success-container');

// Fungsi agar tombol 'Gak Mau' lari saat didekati mouse/disentuh
btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', moveButton); // Supaya jalan juga di HP

function moveButton() {
    // Menghitung ukuran layar supaya tombol gak keluar batas
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    // Menentukan posisi X dan Y yang acak
    const randomX = Math.floor(Math.random() * (windowWidth - btnWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - btnHeight));

    // Mengubah posisi tombol menjadi absolut dan memindahkannya
    btnNo.style.position = 'absolute';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

// Fungsi ketika tombol 'Iya' diklik
btnYes.addEventListener('click', () => {
    mainContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
});