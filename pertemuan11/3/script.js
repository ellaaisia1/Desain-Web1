function hitungGaji() {
    const jamNormal = parseInt(document.getElementById('jamNormal').value);
    const jamLembur = parseInt(document.getElementById('jamLembur').value);

    const gajiNormal = jamNormal * 50000;
    let gajiLembur = 0;

    if (jamLembur >= 1 && jamLembur <= 2) {
        gajiLembur = jamLembur * 25000;
    } else if (jamLembur > 2) {
        gajiLembur = 2 * 25000 + (jamLembur - 2) * 35000;
    }

    let bonusMakan = 0;
    if (jamNormal + jamLembur >= 20) {
        bonusMakan = 5000;
    }

    const gajiTotal = gajiNormal + gajiLembur + bonusMakan;

    const hasilGaji = `
        Gaji Normal: Rp${gajiNormal.toLocaleString('id-ID')}<br>
        Gaji Lembur: Rp${gajiLembur.toLocaleString('id-ID')}<br>
        Bonus Makan: Rp${bonusMakan.toLocaleString('id-ID')}<br>
        Gaji Total: Rp${gajiTotal.toLocaleString('id-ID')}
    `;