function hitungDiskon() {
    const namaBarang = document.getElementById('namaBarang').value;
    const hargaBarang = parseInt(document.getElementById('hargaBarang').value);
    const jumlahBarang = parseInt(document.getElementById('jumlahBarang').value);

    let diskon = 0;
    let totalBayar = hargaBarang * jumlahBarang;

    if (jumlahBarang >= 3) {
        diskon = hargaBarang * 0.1;
        totalBayar -= diskon;
    }

    const hasilDiskon = `
        Nama Barang: ${namaBarang}<br>
        Harga Barang: Rp${hargaBarang.toLocaleString('id-ID')}<br>
        Jumlah Barang: ${jumlahBarang}<br>
        Diskon: Rp${diskon.toLocaleString('id-ID')}<br>
        Total Bayar: Rp${totalBayar.toLocaleString('id-ID')}
    `;

    document.getElementById('hasilDiskon').innerHTML = hasilDiskon;
    return false; // mencegah form submit
}