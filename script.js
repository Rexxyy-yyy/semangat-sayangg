const pesan = [
    "Kamu itu jauh lebih kuat dari yang kamu kira sayangg. Semangat terus ya cintakuu! ❤️",
    "Jangan lupa istirahat, kesehatan kamu tetap nomor satu! 🍵",
    "Aku selalu ada di sini buat dukung kamu ya sayangg. Kamu nggak sendirian cantikku! ✨",
    "Tugas kuliah memang banyak, tapi kamu pasti bisa menyelesaikannya satu per satu. 📚",
    "Senyum cantikku! Sayanggkuu yang senyum itu bisa bikin aku meleleh. 😊",
    "Hari ini mungkin berat, tapi besok pasti lebih baik. I'm so proud of you sayangg! 💖",
    "Tarik napas panjang... keluarkan. Kamu sudah melakukan yang terbaik hari ini cintakuu. 🌟"
];

let musikDiputar = false; 
let sedangMengetik = false; // Penanda agar teks baru tidak tertimpa jika tombol diklik cepat

// --- BAGIAN ANIMASI HUJAN HATI ---
function buatHati() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    
    const bentukCinta = ["❤️", "💖", "💕", "✨"];
    heart.innerText = bentukCinta[Math.floor(Math.random() * bentukCinta.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heart.style.fontSize = Math.random() * 1 + 1 + "rem";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(buatHati, 300);

// --- BAGIAN EFEK MENGETIK & MUSIK (Fitur Baru) ---
function munculkanPesan() {
    // Cegah fungsi berjalan ganda jika pesan sebelumnya masih diketik
    if (sedangMengetik) return;

    if (!musikDiputar) {
        document.getElementById("bg-music").play();
        musikDiputar = true;
    }

    const indexAcak = Math.floor(Math.random() * pesan.length);
    const elemenPesan = document.getElementById("pesan-cinta");
    const teksTerpilih = pesan[indexAcak];
    
    // Efek pop-up kotak pesan
    elemenPesan.style.transform = "scale(1.05)";
    setTimeout(() => {
        elemenPesan.style.transform = "scale(1)";
    }, 200);

    // Proses efek teks mengetik (Typewriter Effect)
    elemenPesan.innerHTML = ""; // Kosongkan kotak terlebih dahulu
    sedangMengetik = true;
    let karakterKe = 0;

    function ngetik() {
        if (karakterKe < teksTerpilih.length) {
            elemenPesan.innerHTML += teksTerpilih.charAt(karakterKe);
            karakterKe++;
            setTimeout(ngetik, 45); // Kecepatan mengetik: 45 milidetik per huruf
        } else {
            sedangMengetik = false; // Teks selesai diketik, tombol siap diklik kembali
        }
    }
    
    ngetik(); // Jalankan fungsi mengetik
}