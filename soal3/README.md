# 🔍 Mencari Angka yang Hilang

Program JavaScript untuk menemukan angka yang hilang dari array berurutan menggunakan algoritma matematika efisien.

## 📋 Deskripsi Problem

Diberikan sebuah array yang berisi angka-angka berurutan dengan **satu angka yang hilang**. Program ini akan menemukan angka yang hilang tersebut.

**Constraint:**
- Nomor dalam input array pasti berurutan (tapi boleh acak/tidak terurut)
- Input array bisa sampai ribuan elemen
- Tidak selalu dimulai dari nol
- Hanya ada **1 angka** yang hilang

---

## 📁 Struktur Project

```
find-missing-number/
├── findMissingNumber.js   # 📦 Fungsi utama (core logic)
├── test.js          # 🎮 Test interaktif (input manual)
├── testCLI.js             # ⚡ Test cepat via command line
└── README.md              # 📖 Dokumentasi lengkap
```

---

## 🚀 Instalasi & Setup

### Persyaratan
- Node.js versi 12 atau lebih baru
- Terminal/Command Prompt

### Langkah Instalasi

**1. Clone atau Download Repository**
```bash
git clone <url-repository>
cd find-missing-number
```

**2. Verifikasi Node.js Terinstall**
```bash
node --version
# Output: v14.x.x atau lebih baru
```

---

## 💻 Cara Menggunakan

### **Metode 1: Test Interaktif (RECOMMENDED)** 🎮

Program akan terus meminta input sampai Anda ketik `exit`. Cocok untuk testing berkali-kali.

**Jalankan:**
```bash
node testManual.js
```

**Tampilan:**
```
╔════════════════════════════════════════╗
║   TEST INPUT MANUAL - CARI ANGKA HILANG   ║
╚════════════════════════════════════════╝

📝 Cara pakai:
   Masukkan angka dipisahkan dengan koma
   Contoh: 3,0,2,4
   Contoh: 10,11,13,14,15
   Ketik 'exit' untuk keluar

🔢 Input array: 
```

**Contoh Penggunaan:**
```
🔢 Input array: 3,0,2,4

✅ Hasil:
   Input: [3, 0, 2, 4]
   Angka yang hilang: 1

🔢 Input array: 100,102,103,104

✅ Hasil:
   Input: [100, 102, 103, 104]
   Angka yang hilang: 101

🔢 Input array: 3106,3102,3104,3105,3107

✅ Hasil:
   Input: [3106, 3102, 3104, 3105, 3107]
   Angka yang hilang: 3103

🔢 Input array: exit
👋 Terima kasih! Program selesai.
```

---

### **Metode 2: Test via Command Line** ⚡

Langsung kasih angka sebagai argument. Cocok untuk testing cepat satu kali.

**Jalankan:**
```bash
node testCLI.js <angka1> <angka2> <angka3> ...
```

**Contoh:**
```bash
# Contoh 1
node testCLI.js 3 0 2 4

📊 Hasil:
   Input: [3, 0, 2, 4]
   ✅ Angka yang hilang: 1


# Contoh 2
node testCLI.js 10 11 13 14 15

📊 Hasil:
   Input: [10, 11, 13, 14, 15]
   ✅ Angka yang hilang: 9


# Contoh 3
node testCLI.js 3106 3102 3104 3105 3107

📊 Hasil:
   Input: [3106, 3102, 3104, 3105, 3107]
   ✅ Angka yang hilang: 3103
```

**Jika Tidak Ada Input:**
```bash
node testCLI.js

╔════════════════════════════════════════╗
║   CARI ANGKA HILANG - COMMAND LINE     ║
╚════════════════════════════════════════╝

❌ Tidak ada input!

📝 Cara pakai:
   node testCLI.js <angka1> <angka2> <angka3> ...

💡 Contoh:
   node testCLI.js 3 0 2 4
   node testCLI.js 10 11 13 14 15
   node testCLI.js 3106 3102 3104 3105 3107
```

---

### **Metode 3: Import di Code Sendiri** 📦

Gunakan fungsi `findMissingNumber` di project Anda sendiri.

**Contoh:**
```javascript
const findMissingNumber = require('./findMissingNumber');

// Test 1
const result1 = findMissingNumber([3, 0, 2, 4]);
console.log(result1);  // Output: 1

// Test 2
const result2 = findMissingNumber([3106, 3102, 3104, 3105, 3107]);
console.log(result2);  // Output: 3103

// Test 3
const result3 = findMissingNumber([100, 102, 103, 104]);
console.log(result3);  // Output: 101
```

---

## ⚙️ Cara Kerja Algoritma

### Kompleksitas
- ⏱️ **Time Complexity:** O(n) - hanya perlu satu kali iterasi
- 💾 **Space Complexity:** O(1) - tidak butuh array tambahan
- ✅ **Efisien untuk array dengan ribuan elemen**

### Penjelasan Algoritma

Program menggunakan **rumus matematika deret aritmatika** untuk mencari angka yang hilang:

**Step 1:** Cari nilai minimum dan maksimum
```javascript
const min = Math.min(...arr);  // Nilai terkecil
const max = Math.max(...arr);  // Nilai terbesar
```

**Step 2:** Hitung total yang seharusnya ada
```javascript
// Rumus: n × (min + max) / 2
const n = max - min + 1;  // Jumlah elemen yang seharusnya
const expectedSum = n * (min + max) / 2;
```

**Step 3:** Hitung total yang ada saat ini
```javascript
const actualSum = arr.reduce((sum, num) => sum + num, 0);
```

**Step 4:** Selisihnya adalah angka yang hilang
```javascript
return expectedSum - actualSum;
```

### Contoh Perhitungan

**Input:** `[3, 0, 2, 4]`

```
Step 1: Cari min & max
  min = 0
  max = 4

Step 2: Hitung expected sum
  n = 4 - 0 + 1 = 5
  expectedSum = 5 × (0 + 4) / 2 = 10

Step 3: Hitung actual sum
  actualSum = 3 + 0 + 2 + 4 = 9

Step 4: Cari selisih
  missing = 10 - 9 = 1 ✅
```

---

## 📚 Tech Stack

- **JavaScript (Node.js)** - Runtime environment
- **readline** - Built-in module untuk input interaktif
- **process.argv** - Built-in untuk command line arguments

---

## 📖 API Documentation

### `findMissingNumber(arr)`

Mencari angka yang hilang dari array berurutan.

**Parameters:**
- `arr` (Array<number>): Array angka berurutan dengan 1 angka hilang

**Returns:**
- `number`: Angka yang hilang

**Throws:**
- `Error`: Jika array kosong atau null

**Example:**
```javascript
findMissingNumber([3, 0, 2, 4]);  // Returns: 1
findMissingNumber([10, 11, 13]);   // Returns: 12
```

---

## 🤝 Contributing

Contributions are welcome! Silakan:
1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 👤 Author

Lenta Kristina Sianturi
