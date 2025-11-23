/**
 * Fungsi untuk mencari angka yang hilang dari array berurutan
 * @param {number[]} arr - Array angka berurutan dengan satu angka hilang
 * @returns {number} - Angka yang hilang
 */
function findMissingNumber(arr) {
  // Validasi input
  if (!arr || arr.length === 0) {
    throw new Error("Array tidak boleh kosong");
  }

  // Cari nilai minimum dan maksimum
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  // Hitung jumlah elemen yang seharusnya ada
  const n = max - min + 1;
  
  // Rumus jumlah deret aritmatika: n * (min + max) / 2
  const expectedSum = n * (min + max) / 2;
  
  // Hitung jumlah aktual dari array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
  // Selisihnya adalah angka yang hilang
  return expectedSum - actualSum;
}

// Export untuk digunakan di file lain
module.exports = findMissingNumber;