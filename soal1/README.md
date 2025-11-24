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


## 📦 Instalasi & Menjalankan Program

### Metode 1: Clone Repository 
```bash
# 1. Clone repository ini
git clone https://github.com/lentakristina/developer_Test.git
```

## 📋 Field Form & Validasi

| Field | Type | Validasi | Contoh Valid |
|-------|------|----------|--------------|
| Nama Lengkap | Text | Wajib diisi | Lenta |
| Email | Email | Format email valid | user@example.com |
| Password | Password | Min 8 karakter | password123 |
| Konfirmasi Password | Password | Harus sama dengan password | password123 |


## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur dan markup
- **CSS3** - Styling, animasi, dan responsive design
- **Vanilla JavaScript** - Validasi form dan interaktivitas
  

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
