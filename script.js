// --- KONFIGURASI EMAIL FORM SUBMIT ---
const emailPenerima = "hilmikaut@gmail.com"; 

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

// Fungsi Pindah Halaman Halus
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
    }, 400); // Waktu transisi dipercepat agar lebih responsif
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

// Logika Tombol "Gak"
const teksMohon = [
    "Pliss maafin aku 🥺", 
    "Beneran gak mau? 😭", 
    "Ayolah sayang... 🥹", 
    "Jangan ngambek ya 🥲",
    "Aku mohon banget... 🤍"
];
let noClickCount = 0;

btnNo.addEventListener('click', () => {
    historyTombol.push("Klik Gak");
    btnNo.innerText = teksMohon[noClickCount % teksMohon.length];
    noClickCount++;
    
    // Efek goyang pelan
    btnNo.style.transform = "translateX(8px)";
    setTimeout(() => btnNo.style.transform = "translateX(-8px)", 80);
    setTimeout(() => btnNo.style.transform = "translateX(0)", 160);
});

// Logika Tombol "Iya" & Kirim Email
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
    .then(data => changeScene(scene4, scene5))
    .catch(error => changeScene(scene4, scene5));
});

// ==========================================
// DEKORASI BACKGROUND (Lebih kalem)
// ==========================================
const decorationsContainer = document.getElementById('decorations');

function createDecorations() {
    const emojis = ['🤍', '🌸', '✨', '🫧'];
    const count = 12; // Jumlah dikurangi agar rapi

    for (let i = 0; i < count; i++) {
        const decor = document.createElement('div');
        decor.classList.add('floating-item');
        decor.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        decor.style.left = Math.random() * 100 + 'vw';
        decor.style.fontSize = (Math.random() * 1 + 0.8) + 'rem';
        decor.style.animationDuration = (Math.random() * 10 + 10) + 's';
        decor.style.animationDelay = (Math.random() * 5) + 's';
        decor.style.setProperty('--op', Math.random() * 0.2 + 0.1); // Transparansi halus
        decorationsContainer.appendChild(decor);
    }
}

// Efek Ledakan Halus
function createClickBurst(x, y) {
    const emojis = ['✨', '🤍', '🩷'];
    for (let i = 0; i < 4; i++) {
        const heart = document.createElement('div');
        heart.classList.add('click-heart');
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';

        const tx = (Math.random() - 0.5) * 80 + 'px'; 
        const ty = (Math.random() - 0.5) * 80 - 30 + 'px'; 
        heart.style.setProperty('--tx', tx);
        heart.style.setProperty('--ty', ty);

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 800);
    }
}

document.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() !== 'textarea' && e.target.tagName.toLowerCase() !== 'button') {
        createClickBurst(e.clientX, e.clientY);
    }
});

window.onload = createDecorations;