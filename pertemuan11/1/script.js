function konversiNilai() {
    const nilaiInput = document.getElementById('nilaiInput').value;
    const nilai = parseInt(nilaiInput);

    let hasilKonversi;
    if (nilai >= 80 && nilai <= 100) {
        hasilKonversi = "Nilai Anda: A";
    } else if (nilai >= 70 && nilai <= 79) {
        hasilKonversi = "Nilai Anda: B";
    } else {
        hasilKonversi = "Nilai tidak valid";
    }

    document.getElementById('hasilKonversi').textContent = hasilKonversi;
    return false; // mencegah form submit
}