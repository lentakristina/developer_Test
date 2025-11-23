# 📝 Form Pendaftaran Pengguna

Halaman web sederhana untuk pendaftaran pengguna dengan validasi form menggunakan HTML, CSS, dan JavaScript murni (Vanilla JS).


## 🌟 Fitur

- ✅ **Form Pendaftaran Lengkap** dengan 4 field input
- ✅ **Validasi Real-time** saat user mengetik
- ✅ **Email Validation** menggunakan regex
- ✅ **Password Matching** untuk konfirmasi password
- ✅ **Minimum Password Length** (8 karakter)
- ✅ **Responsive Design** - Mobile friendly
- ✅ **Visual Feedback** dengan border hijau (valid) dan merah (error)
- ✅ **Pesan Sukses** setelah pendaftaran berhasil
- ✅ **Modern UI/UX** dengan gradient dan animasi

## 🎯 Demo

[Live Demo di GitHub Pages](#) _(coming soon)_

## 📦 Instalasi & Menjalankan Program

### Metode 1: Clone Repository 
```bash
# 1. Clone repository ini
git clone https://github.com/lentakristina/developer_test.git
```

## 📋 Field Form & Validasi

| Field | Type | Validasi | Contoh Valid |
|-------|------|----------|--------------|
| Nama Lengkap | Text | Wajib diisi | John Doe |
| Email | Email | Format email valid | user@example.com |
| Password | Password | Min 8 karakter | password123 |
| Konfirmasi Password | Password | Harus sama dengan password | password123 |


## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur dan markup
- **CSS3** - Styling, animasi, dan responsive design
- **Vanilla JavaScript** - Validasi form dan interaktivitas


## 🐛 Troubleshooting

### ❌ Form tidak muncul dengan benar
**Solusi:**
- Pastikan file `index.html` tidak corrupt
- Buka dengan browser modern (Chrome, Firefox, Edge)
- Clear cache browser (`Ctrl + Shift + Delete`)

### ❌ Validasi tidak bekerja
**Solusi:**
- Buka Developer Tools (`F12`)
- Cek tab **Console** untuk error
- Pastikan JavaScript tidak diblokir oleh browser

### ❌ Styling tidak tampil
**Solusi:**
- Pastikan semua kode CSS ada di dalam `<style>` tag
- Refresh browser dengan `Ctrl + F5` (hard refresh)

### ❌ Tidak responsive di mobile
**Solusi:**
- Pastikan ada meta viewport tag di HTML:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 📝 Testing Form

**Test Case 1: Email Tidak Valid**
- Email: `userexample.com` (tanpa @)
- Expected: Muncul error "Format email tidak valid"

**Test Case 2: Password Kurang dari 8 Karakter**
- Password: `123456`
- Expected: Muncul error "Password harus minimal 8 karakter"

**Test Case 3: Password Tidak Cocok**
- Password: `password123`
- Konfirmasi: `password456`
- Expected: Muncul error "Password tidak cocok"

**Test Case 4: Form Valid**
- Nama: `John Doe`
- Email: `john@example.com`
- Password: `password123`
- Konfirmasi: `password123`
- Expected: Muncul pesan "✓ Pendaftaran Berhasil"


## 👨‍💻 Author

Lenta Kristina Sianturi