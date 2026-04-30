# 🐐 SDS FARM - Sistem Manajemen Hewan Qurban

**Prototype UI/UX** untuk platform penjualan dan manajemen hewan qurban terintegrasi dengan sistem kandang, QR Code, dan multi-role (Admin, Kasir, Konsumen).

---

## 📋 Fitur Prototype

### 👑 Admin Panel
- ✅ CRUD Produk Hewan Qurban (Sapi, Kambing, Domba)
- ✅ Generate QR Code untuk setiap produk
- ✅ Manajemen stok & harga (dasar, konsumen, sales)
- ✅ Publish/Unpublish produk
- ✅ Monitoring transaksi & kas pemasukan
- ✅ Visual layout kandang (drag & drop assign produk)
- ✅ Manajemen data sales & target penjualan
- ✅ Filter transaksi (status, tanggal)

### 🧮 Kasir Panel (Akan Datang)
- Input transaksi + pilih sales
- Pembayaran parsial
- Print nota penjualan
- Filter transaksi by sales / status pembayaran

### 🛍️ Konsumen Panel (Akan Datang)
- Registrasi & Login
- Search hewan (by kategori, harga)
- Homepage dengan slider & hero section
- Card hewan terbaru & stok hampir habis

---

## 🛠️ Tech Stack (Prototype)

| Teknologi | Kegunaan |
|-----------|----------|
| HTML5 | Struktur halaman |
| Tailwind CSS | Styling & responsive design |
| jQuery | Interaktivitas & DOM manipulation |
| FontAwesome 6 | Ikon-ikon |
| QRCode.js | Generate QR code preview |

> ⚠️ **Catatan**: Prototype ini menggunakan **dummy data (JavaScript array)**. Untuk production, akan diintegrasikan dengan Laravel + database.

---

## 📁 Struktur Folder
```bash
├── admin/
│ ├── products.html # Manajemen produk + QR code
│ ├── transactions.html # Kas pemasukan & daftar transaksi
│ ├── kandang.html # Layout kandang interaktif
│ └── sales-list.html # CRUD sales + target progress
├── kasir/ # (Coming soon)
│ ├── pos-transaction.html
│ └── transactions-history.html
├── consumer/ # (Coming soon)
│ ├── home.html
│ ├── search.html
│ └── cart.html
├── assets/
│ ├── tailwind.css # Custom CSS components
│ └── dummy.js # Dummy data & global functions
└── README.md
```

## 🚀 Cara Menjalankan Prototype

### Prasyarat
- Web browser modern (Chrome, Firefox, Edge)
- VS Code (opsional, dengan ekstensi Live Server)

### Langkah-langkah

1. **Clone atau download** folder `qurban-prototype-html`

2. **Buka dengan Live Server** (rekomendasi):
   ```bash
   # Jika pakai VS Code
   - Install ekstensi "Live Server"
   - Klik kanan pada admin/products.html
   - Pilih "Open with Live Server"
    ```
3. **Atau langsung buka file**:
   ```bash
    - Double-click admin/products.html
    - ⚠️ QR Code library mungkin terblokir CORS jika buka langsung (tetap berfungsi untuk preview)
   ```

