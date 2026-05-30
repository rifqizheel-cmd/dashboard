# Jurnal Vibecoding & Rekayasa Perangkat Lunak

**Nama:** Muhammad Rifqi Alhilali

**Kelas:** 11

**Nama Proyek:** Dashboard dengan CSS Modules

---

## 🏗️ 1. Definisi Stack & Arsitektur

*Jelaskan perencanaan tingkat tinggi (high-level planning) dari aplikasimu sebelum mulai menulis kode.*

* **Lingkungan Pengembangan:** ReactJS dengan Vite
* **Styling:** CSS Modules
* **Manajemen State:** useState
* **AI Code Editor / LLM Assistant:** ChatGPT

### Alasan Pemisahan Komponen

Saya memisahkan komponen agar kode lebih rapi, mudah dibaca, dan mudah digunakan kembali.

Contohnya:

* `Navbar` digunakan untuk bagian navigasi
* `Sidebar` digunakan untuk menu dashboard
* `WeatherCard` digunakan untuk menampilkan informasi cuaca
* `Forecast` digunakan untuk menampilkan prakiraan cuaca
* `Footer` digunakan untuk bagian bawah website

Struktur folder dibuat agar project lebih terorganisir dan memudahkan proses development.

```bash
src/
 ├── components/
 │    ├── Navbar/
 │    │    ├── Navbar.jsx
 │    │    └── Navbar.module.css
 │    ├── Sidebar/
 │    │    ├── Sidebar.jsx
 │    │    └── Sidebar.module.css
 │    ├── WeatherCard/
 │    │    ├── WeatherCard.jsx
 │    │    └── WeatherCard.module.css
 │    ├── Forecast/
 │    │    ├── Forecast.jsx
 │    │    └── Forecast.module.css
 │    └── Footer/
 │         ├── Footer.jsx
 │         └── Footer.module.css
 ├── data/
 │    └── weatherData.js
 ├── pages/
 │    └── Home.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🗣️ 2. Strategi Prompting

### Prompt 1 (Fokus pada Logika / State)

> "Buatkan dashboard cuaca React JS menggunakan data statis lokal dan CSS Modules dengan struktur komponen yang rapi."

### Prompt 2 (Fokus pada UI / Layout)

> "Buatkan UI dashboard cuaca modern dengan desain glassmorphism, responsive layout, sidebar, dan weather cards menggunakan CSS Modules."

### Hasil Evaluasi Prompt

AI cukup membantu dalam membuat struktur dashboard dan pemisahan CSS Modules. Namun beberapa bagian layout dan responsive design masih perlu penyesuaian manual agar tampilan lebih rapi dan konsisten.

---

## 🐛 3. Log Problem Solving

### Deskripsi Error / Bug

Style CSS Modules tidak terbaca pada beberapa komponen.

> Masalah terjadi karena penamaan file CSS belum menggunakan format `.module.css`.

### Langkah Investigasi

Saya mengecek struktur folder dan import file CSS menggunakan `console.log()` serta memastikan penamaan file sudah benar.

### Kolaborasi dengan AI

> "Perbaiki error CSS Modules React JS agar style component dapat terbaca dengan benar."

### Solusi Akhir

Ternyata saya harus menggunakan format file `.module.css` dan melakukan import style dengan syntax object seperti `styles.container`.

---

## 🎯 4. Refleksi Pribadi

Setelah mengerjakan project ini dengan metode Vibecoding, saya belajar bahwa AI dapat membantu mempercepat proses pembuatan UI dan struktur project. Namun manusia tetap berperan penting dalam menentukan desain, struktur folder, dan debugging agar aplikasi berjalan dengan baik.
