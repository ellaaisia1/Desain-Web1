function hitungPulsa() {
    const detikInput = parseInt(document.getElementById('detik').value);
    if (isNaN(detikInput) || detikInput <= 0) {
      alert('Masukkan jumlah detik yang valid!');
      return;
    }
  
    const totalPulsa = Math.ceil(detikInput / 45);
    const totalBayar = totalPulsa * 30;
  
    const jam = Math.floor(detikInput / 3600);
    const menit = Math.floor((detikInput % 3600) / 60);
    const detikHasil = detikInput % 60;
  
    document.getElementById('jam').textContent = Jam: ${jam};
    document.getElementById('menit').textContent = Menit: ${menit};
    document.getElementById('detik-hasil').textContent = Detik: ${detikHasil};
    document.getElementById('total-bayar').textContent = Rp. ${totalBayar};
  
    document.getElementById('hasil-billing').style.display = 'block';
  }