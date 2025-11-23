const findMissingNumber = require('./findMissingNumber');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("╔════════════════════════════════════════╗");
  console.log("║   CARI ANGKA HILANG - COMMAND LINE     ║");
  console.log("╚════════════════════════════════════════╝");
  console.log("\n❌ Tidak ada input!");
  console.log("\n📝 Cara pakai:");
  console.log("   node testCLI.js <angka1> <angka2> <angka3> ...");
  console.log("\n💡 Contoh:");
  console.log("   node testCLI.js 3 0 2 4");
  console.log("   node testCLI.js 10 11 13 14 15");
  console.log("   node testCLI.js 3106 3102 3104 3105 3107");
  process.exit(1);
}

try {
  const arr = args.map(arg => {
    const num = parseInt(arg);
    if (isNaN(num)) {
      throw new Error(`'${arg}' bukan angka yang valid`);
    }
    return num;
  });

  console.log("\n📊 Hasil:");
  console.log(`   Input: [${arr.join(', ')}]`);
  
  const result = findMissingNumber(arr);
  console.log(`   ✅ Angka yang hilang: ${result}\n`);

} catch (error) {
  console.log(`\n❌ Error: ${error.message}\n`);
  process.exit(1);
}