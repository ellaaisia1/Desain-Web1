// script.js

const zodiakForm = document.getElementById('zodiakForm');
const tanggalInput = document.getElementById('tanggal');
const bulanInput = document.getElementById('bulan');
const hasilZodiak = document.getElementById('hasilZodiak');

const zodiakData = {
    "aries": {
        "kesehatan": "Menjaga pola makan dan olahraga teratur.",
        "asmara": "Menjalin komunikasi yang terbuka dengan pasangan.",
        "keuangan": "Hematlah pengeluaran dan hindari membeli barang yang tidak penting.",
        "karir": "Tetap fokus dan bekerja keras untuk mencapai tujuan."
    },
    "taurus": {
        "kesehatan": "Melakukan kegiatan yang disukai untuk mengurangi stres.",
        "asmara": "Luangkan waktu berkualitas bersama pasangan.",
        "keuangan": "Buatlah perencanaan keuangan yang matang.",
        "karir": "Bersikaplah proaktif dan jangan ragu untuk mengambil inisiatif."
    },
    // ... data zodiak lainnya
};

zodiakForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const tanggal = parseInt(tanggalInput.value);
    const bulan = bulanInput.value.toLowerCase();

    const zodiak = getZodiak(tanggal, bulan);
    if (zodiak) {
        const ramalan = `Zodiak kamu adalah *${zodiak}*. Ramalan untukmu hari ini:
        \n* Kesehatan: ${zodiakData[zodiak].kesehatan}
        \n* Asmara: ${zodiakData[zodiak].asmara}
        \n* Keuangan: ${zodiakData[zodiak].keuangan}
        \n* Karir: ${zodiakData[zodiak].karir}`;
        hasilZodiak.textContent = ramalan;
    } else {
        hasilZodiak.textContent = "Tanggal dan bulan yang kamu masukkan tidak valid.";
    }
});

function getZodiak(tanggal, bulan) {
    if (bulan === "November" && tanggal >= 26 && tanggal <= 31) {
        return "november";
    } else if (bulan === "april" && tanggal >= 1 && tanggal <= 19) {
        return "aries";
    } else if (bulan === "april" && tanggal >= 20 && tanggal <= 30) {
        return "taurus";
    }
}