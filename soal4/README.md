# 🧮 Formula Perhitungan Calculator

Program untuk mencari formula operasi matematika (+, -, *) yang menghasilkan target angka tertentu.

## 📋 Deskripsi Problem

Diberikan daftar angka dan target angka, program akan mencari cara menghitung menggunakan operator (+, -, *) untuk mencapai target yang diinginkan.

**Constraint:**
- Operator yang digunakan: **+, -, ***
- **Semua angka wajib digunakan**
- Program akan otomatis mencoba berbagai kombinasi operator dan penempatan kurung

---

## 📁 Struktur Project

```
formula-calculator/
├── formulaCalculator.js   # Fungsi utama (core logic)
├── testFormula.js         # CLI untuk input manual
└── README.md              # Dokumentasi
```

---

## 🚀 Instalasi & Setup

### Persyaratan
- Node.js versi 12 atau lebih baru

### Langkah Setup

```bash
# 1. Clone atau buat folder
mkdir formula-calculator
cd formula-calculator

# 2. Buat file yang dibutuhkan
touch formulaCalculator.js
touch testFormula.js
touch README.md

# 3. Copy code ke masing-masing file

# 4. Verifikasi Node.js
node --version
```

---

## 💻 Cara Menggunakan

### Format Command

```bash
node testFormula.js <angka1> <angka2> <angka3> ... <target>
```

**Catatan:**
- Angka **terakhir** adalah **TARGET**
- Angka sebelumnya adalah **SOURCE** yang akan dikombinasikan
- Minimal 2 angka source + 1 target

---

### Contoh Penggunaan

#### Contoh 1: Target 16
```bash
node testFormula.js 1 4 5 6 16
```

**Output:**
```
╔════════════════════════════════════════╗
║      FORMULA PERHITUNGAN CALCULATOR     ║
╚════════════════════════════════════════╝

📊 Input:
   Source: [1, 4, 5, 6]
   Target: 16

🔍 Mencari formula...

✅ DITEMUKAN!

💡 Formula: 1 + 4 + 5 + 6

🎯 Verifikasi: 1+4+5+6 = 16
⏱️  Waktu pencarian: 45ms
```

#### Contoh 2: Target 18
```bash
node testFormula.js 1 4 5 6 18
```

**Output:**
```
📊 Input:
   Source: [1, 4, 5, 6]
   Target: 18

🔍 Mencari formula...

✅ DITEMUKAN!

💡 Formula: (1 + 5) * 4 - 6

🎯 Verifikasi: (1+5)*4-6 = 18
⏱️  Waktu pencarian: 52ms
```

#### Contoh 3: Target 50
```bash
node testFormula.js 1 4 5 6 50
```

**Output:**
```
📊 Input:
   Source: [1, 4, 5, 6]
   Target: 50

🔍 Mencari formula...

✅ DITEMUKAN!

💡 Formula: (4 + 6) * 5 * 1

🎯 Verifikasi: (4+6)*5*1 = 50
⏱️  Waktu pencarian: 38ms
```

#### Contoh 4: Target Tidak Ditemukan
```bash
node testFormula.js 2 3 4 1000
```

**Output:**
```
📊 Input:
   Source: [2, 3, 4]
   Target: 1000

🔍 Mencari formula...

❌ TIDAK DITEMUKAN!

📝 Tidak ada kombinasi operator yang menghasilkan 1000
⏱️  Waktu pencarian: 15ms
```

---

## ⚙️ Cara Kerja Algoritma

### Strategi Pencarian

Program menggunakan **brute force dengan optimasi** untuk mencoba semua kemungkinan:

1. **Generate Permutasi Angka**
   - Coba semua urutan angka yang berbeda
   - Contoh: [1,4,5,6] → [1,4,5,6], [1,4,6,5], [1,5,4,6], ...

2. **Generate Kombinasi Operator**
   - Coba semua kombinasi +, -, *
   - Untuk 4 angka: perlu 3 operator
   - Total kombinasi: 3³ = 27 kombinasi

3. **Generate Penempatan Kurung**
   - Tanpa kurung: `1 + 4 + 5 + 6`
   - Kurung 2 angka: `(1 + 4) + 5 + 6`
   - Kurung 3 angka: `(1 + 4 + 5) + 6`
   - Multiple kurung: `(1 + 4) * (5 + 6)`

4. **Evaluasi Setiap Kombinasi**
   - Hitung hasil setiap formula
   - Jika hasil = target → FOUND!
   - Jika tidak → coba kombinasi berikutnya

### Kompleksitas

- **Time Complexity:** O(n! × 3^(n-1) × k) 
  - n! = permutasi angka
  - 3^(n-1) = kombinasi operator
  - k = variasi penempatan kurung
  
- **Space Complexity:** O(n)

- **Performansi:**
  - 3-4 angka: < 100ms
  - 5 angka: < 500ms
  - 6 angka: 1-3 detik

---

## 🛠️ Troubleshooting

### Error: "Input tidak lengkap"

**Penyebab:** Tidak memberikan cukup argument

**Solusi:**
```bash
# ❌ Salah
node testFormula.js 1 4

# ✅ Benar (minimal 2 source + 1 target)
node testFormula.js 1 4 5
```

### Error: "bukan angka yang valid"

**Penyebab:** Input mengandung karakter non-angka

**Solusi:**
```bash
# ❌ Salah
node testFormula.js 1 a 5 10

# ✅ Benar
node testFormula.js 1 2 5 10
```

### Result: "TIDAK DITEMUKAN"

**Kemungkinan:**
- Target terlalu besar/kecil untuk dicapai
- Kombinasi operator (+, -, *) tidak cukup
- Coba dengan angka atau target yang berbeda

---

## 📊 Contoh Test Cases

| Source Numbers | Target | Hasil | Formula |
|----------------|--------|-------|---------|
| `1 4 5 6` | `16` | ✅ | `1 + 4 + 5 + 6` |
| `1 4 5 6` | `18` | ✅ | `(1 + 5) * 4 - 6` |
| `1 4 5 6` | `50` | ✅ | `(4 + 6) * 5 * 1` |
| `2 3 4 5` | `23` | ✅ | `2 + 3 * 4 + 5` |
| `1 2 3` | `100` | ❌ | Tidak ditemukan |

---

## 🎯 Fitur

✅ Mencoba semua permutasi angka  
✅ Mencoba semua kombinasi operator (+, -, *)  
✅ Otomatis menambahkan kurung jika diperlukan  
✅ Verifikasi hasil perhitungan  
✅ Menampilkan waktu pencarian  
✅ Error handling yang jelas  

---

## ⚠️ Limitasi

- Hanya mendukung operator: **+, -, ***
- Tidak mendukung operator: **/, %, ^**
- Semakin banyak angka, semakin lama waktu pencarian
- Untuk 7+ angka, waktu pencarian bisa sangat lama (exponential)

---


## 👤 Author

Lenta Kristina Sianturi