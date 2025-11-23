const findMissingNumber = require('./findMissingNumber');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("╔════════════════════════════════════════╗");
console.log("║   TEST INPUT MANUAL - CARI ANGKA HILANG   ║");
console.log("╚════════════════════════════════════════╝");
console.log("\n📝 Cara pakai:");
console.log("   Masukkan angka dipisahkan dengan koma");
console.log("   Contoh: 3,0,2,4");
console.log("   Contoh: 10,11,13,14,15");
console.log("   Ketik 'exit' untuk keluar\n");

function askInput() {
  rl.question('🔢 Input array: ', (input) => {
    // Keluar dari program
    if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
      console.log("\n👋 Terima kasih! Program selesai.");
      rl.close();
      return;
    }

    // Jika input kosong
    if (!input.trim()) {
      console.log("⚠️  Input tidak boleh kosong!\n");
      askInput();
      return;
    }

    try {
      // Parse input menjadi array angka
      const arr = input.split(',').map(num => parseInt(num.trim()));
      
      // Validasi apakah semua input adalah angka
      if (arr.some(isNaN)) {
        console.log("❌ Error: Semua input harus berupa angka!\n");
        askInput();
        return;
      }

      // Cari angka yang hilang
      const result = findMissingNumber(arr);
      
      console.log(`\n✅ Hasil:`);
      console.log(`   Input: [${arr.join(', ')}]`);
      console.log(`   Angka yang hilang: ${result}\n`);
      
    } catch (error) {
      console.log(`\n❌ Error: ${error.message}\n`);
    }
    
    askInput(); // Tanya lagi untuk input berikutnya
  });
}

// Mulai program
askInput();