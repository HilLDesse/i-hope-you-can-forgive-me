// --- KONFIGURASI EMAIL FORM SUBMIT ---
const emailPenerima = "EMAIL_KAMU_DISINI@gmail.com"; 

const scene1 = document.getElementById('scene-1');
const scene2 = document.getElementById('scene-2');
const scene3 = document.getElementById('scene-3');
const scene4 = document.getElementById('scene-4');
const scene5 = document.getElementById('scene-5');

const btnNext1 = document.getElementById('btn-next-1');
const btnNext2 = document.getElementById('btn-next-2');
const btnNext3 = document.getElementById('btn-next-3');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const inputCurhatan = document.getElementById('curhatan');

let keluhKesahText = "";
let historyTombol = []; 

// Fungsi Pindah Halaman (Dipercepat untuk nuansa aplikasi mobile)
function changeScene(currentScene, nextScene) {
    currentScene.classList.remove('visible');
    currentScene.classList.add('hidden');
    
    nextScene.style.display = 'block';
    
    setTimeout(() => {
        currentScene.style.display = 'none';
        setTimeout(() => {
            nextScene.classList.remove('hidden');
            nextScene.classList.add('visible');
        }, 30);
    }, 600); // Waktu transisi disesuaikan
}

btnNext1.addEventListener('click', () => changeScene(scene1, scene2));
btnNext2.addEventListener('click', () => changeScene(scene2, scene3));

btnNext3.addEventListener('click', () => {
    keluhKesahText = inputCurhatan.value;
    if (keluhKesahText.trim() === "") {
        keluhKesahText = "(Dia tidak menulis curhatan apapun)";
    }
    changeScene(scene3, scene4);
});

// Logika Tombol "Gak" (Berubah teks, responsif sentuh)
const teksMohon = [
    "Pliss maafin aku 🥺", 
    "Beneran gak mau? 😭", 
    "Ayolah sayang... 🥹", 
    "Jangan ngambek lagi dong 🥲",
    "Aku mohon banget... 💔"
];
let noClickCount = 0;

btnNo.addEventListener('click', () => {
    historyTombol.push("Klik Gak");
    
    btnNo.innerText = teksMohon[noClickCount % teksMohon.length];
    noClickCount++;
    
    // Animasi getar untuk tombol
    btnNo.style.transform = "translateX(10px)";
    setTimeout(() => btnNo.style.transform = "translateX(-10px)", 50);
    setTimeout(() => btnNo.style.transform = "translateX(0)", 100);
});

// Logika Tombol "Iya" & Kirim Email Rahasia
btnYes.addEventListener('click', () => {
    historyTombol.push("Akhirnya Klik Iya ❤️");
    
    btnYes.innerText = "Tunggu sebentar... ⏳";
    btnYes.disabled = true;
    btnNo.style.display = 'none'; 
    
    let dataKirim = {
        Pesan_Curhatan: keluhKesahText,
        Riwayat_Tombol_Ditekan: historyTombol.join(" -> ")
    };

    fetch(`https://formsubmit.co/ajax/${emailPenerima}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(dataKirim)
    })
    .then(response => response.json())
    .then(data => {
        changeScene(scene4, scene5);
    })
    .catch(error => {
        changeScene(scene4, scene5);
    });
});