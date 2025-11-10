# UTS Web Service Engineering (Ganjil 20251)
# Proyek: UTS-WSE-230104040059

RESTful API ini dibuat untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah Web Service Engineering.

---

## 👩‍🎓 Identitas Mahasiswa

* **Nama:** Siti Magfiratun Warahmah
* **NIM:** 230104040059
* **Kelas:** TI23B
* **Dosen:** Muhayat, M.IT
* **Resource:** `movies` (Sesuai digit akhir NIM 9)

---

## 🚀 Deskripsi API

API ini adalah layanan RESTful sederhana yang dibangun menggunakan **Node.js** dan **Express.js**. API ini tidak menggunakan database eksternal, melainkan mengelola data dummy (data film) yang disimpan dalam memori (file `.js`).

Fungsionalitas utama API ini mencakup operasi **CRUD** (Create, Read, Update, Delete) penuh untuk data film, lengkap dengan validasi input dan penanganan error yang sesuai.

---

## 🛠️ Teknologi yang Digunakan

* **Node.js:** Sebagai runtime environment JavaScript.
* **Express.js:** Sebagai framework untuk membangun server API.
* **Nodemon:** Sebagai *dev dependency* untuk me-restart server secara otomatis saat ada perubahan kode.

---

## 🏃 Cara Menjalankan Proyek

1.  **Clone Repository (jika ada):**
    ```bash
    git clone https://github.com/Siti-Magfiratun-Warahmah/230104040059-UTS-WSE-20251
    ```

2.  **Install Dependencies:**
    Buka terminal di folder proyek dan jalankan:
    ```bash
    npm install
    ```

3.  **Jalankan Server:**
    Untuk menjalankan server dalam mode development (sesuai instruksi soal):
    ```bash
    npm run dev
    ```

4.  **Server Aktif:**
    Server akan berjalan di port default `3000`.
    `http://localhost:3000`

---

## 📖 Tabel Endpoint API

Berikut adalah semua endpoint yang tersedia untuk resource `movies`:

| Method | Endpoint | Deskripsi | Status Sukses / Gagal |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/info` | Informasi identitas API & pembuat | `200 OK` |
| `GET` | `/api/movies` | Ambil semua data film | `200 OK` |
| `GET` | `/api/movies/:id` | Ambil satu data film berdasarkan ID | `200 OK` / `404 Not Found` |
| `POST` | `/api/movies` | Tambah data film baru | `201 Created` / `400 Bad Request` |
| `PUT` | `/api/movies/:id` | Update data film berdasarkan ID | `200 OK` / `400 Bad Request` / `404 Not Found` |
| `DELETE`| `/api/movies/:id` | Hapus data film berdasarkan ID | `204 No Content` / `404 Not Found` |

---

## 🌟 Penerapan 7 Prinsip RESTful API

Proyek ini menerapkan 7 prinsip RESTful API sesuai materi perkuliahan:

1.  **Resource-Oriented URI:**
    Menggunakan *Uniform Resource Identifier* (URI) yang berorientasi pada resource (kata benda jamak), yaitu `/api/movies`.

2.  **Proper HTTP Methods:**
    Memanfaatkan method HTTP (`GET`, `POST`, `PUT`, `DELETE`) sesuai dengan fungsinya untuk operasi CRUD.

3.  **Stateless Communication:**
    Server tidak menyimpan *state* atau *session* dari klien. Setiap request dari klien bersifat independen dan harus berisi semua informasi yang dibutuhkan.

4.  **Consistent Status Codes:**
    Menggunakan HTTP status code secara konsisten untuk menandakan hasil dari request (mis. `200` untuk sukses, `201` untuk created, `204` untuk delete, `400` untuk validasi gagal, dan `404` jika data tidak ditemukan).

5.  **JSON Representation:**
    Semua pertukaran data antara klien dan server (body request dan response) menggunakan format **JSON** yang seragam.

6.  **Validation & Error Handling:**
    Menerapkan validasi di sisi server untuk *field* wajib (yaitu `title` dan `genre` untuk resource `movies`). Jika validasi gagal, server akan merespon dengan status `400 Bad Request` dan pesan error yang jelas.

7.  **Discoverability:**
    Menyediakan endpoint `GET /api/info` sebagai metadata service, yang memberikan informasi dasar tentang API, pembuat, dan deskripsinya.

