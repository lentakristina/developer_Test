const findFormula = require('./formulaCalculator');

// Ambil arguments dari command line
const args = process.argv.slice(2);

// Validasi input
if (args.length < 2) {
  console.log("╔════════════════════════════════════════╗");
  console.log("║      FORMULA PERHITUNGAN CALCULATOR     ║");
  console.log("╚════════════════════════════════════════╝");
  console.log("\n❌ Input tidak lengkap!");
  console.log("\n📝 Cara pakai:");
  console.log("   node testFormula.js <angka1> <angka2> ... <target>");
  console.log("\n💡 Contoh:");
  console.log("   node testFormula.js 1 4 5 6 16");
  console.log("   node testFormula.js 1 4 5 6 18");
  console.log("   node testFormula.js 1 4 5 6 50");
  console.log("\n📌 Catatan:");
  console.log("   - Angka terakhir adalah TARGET");
  console.log("   - Minimal 2 angka source + 1 target");
  console.log("   - Operator: +, -, *");
  process.exit(1);
}

try {
  // Pisahkan angka source dan target
  const target = parseInt(args[args.length - 1]);
  const numbers = args.slice(0, -1).map(arg => {
    const num = parseInt(arg);
    if (isNaN(num)) {
      throw new Error(`'${arg}' bukan angka yang valid`);
    }
    return num;
  });

  if (isNaN(target)) {
    throw new Error("Target harus berupa angka");
  }

  console.log("\n╔════════════════════════════════════════╗");
  console.log("║      FORMULA PERHITUNGAN CALCULATOR     ║");
  console.log("╚════════════════════════════════════════╝");
  console.log("\n📊 Input:");
  console.log(`   Source: [${numbers.join(', ')}]`);
  console.log(`   Target: ${target}`);
  console.log("\n🔍 Mencari formula...\n");

  // Cari formula
  const startTime = Date.now();
  const formula = findFormula(numbers, target);
  const endTime = Date.now();

  if (formula) {
    console.log("✅ DITEMUKAN!");
    console.log(`\n💡 Formula: ${formula}`);
    
    // Verifikasi hasil
    const result = Function('"use strict"; return (' + formula.replace(/\s/g, '') + ')')();
    console.log(`\n🎯 Verifikasi: ${formula.replace(/\s/g, '')} = ${result}`);
    console.log(`⏱️  Waktu pencarian: ${endTime - startTime}ms\n`);
  } else {
    console.log("❌ TIDAK DITEMUKAN!");
    console.log(`\n📝 Tidak ada kombinasi operator yang menghasilkan ${target}`);
    console.log(`⏱️  Waktu pencarian: ${endTime - startTime}ms\n`);
  }

} catch (error) {
  console.log(`\n❌ Error: ${error.message}\n`);
  process.exit(1);
}