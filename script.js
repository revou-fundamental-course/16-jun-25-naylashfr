function hitung() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const sisiA = parseFloat(document.getElementById("sisiA").value);
  const sisiB = parseFloat(document.getElementById("sisiB").value);
  const sisiC = parseFloat(document.getElementById("sisiC").value);

  // Validasi input
  if (isNaN(alas) || isNaN(tinggi) || isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    alert("Mohon isi semua kolom dengan angka!");
    return;
  }

  // Hitung luas: (1/2) × alas × tinggi
  const luas = 0.5 * alas * tinggi;

  // Hitung keliling: sisiA + sisiB + sisiC
  const keliling = sisiA + sisiB + sisiC;

  // Tampilkan hasil
  document.getElementById("hasilLuas").innerHTML = `Luas Segitiga: ${luas}`;
  document.getElementById("hasilKeliling").innerHTML = `Keliling Segitiga: ${keliling}`;
}
