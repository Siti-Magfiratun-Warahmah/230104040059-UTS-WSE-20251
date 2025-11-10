# UTS Web Service Engineering (Ganjil 20251)
# Proyek: UTS-WSE-230104040059

RESTful API ini dibuat untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah Web Service Engineering.

---

## 👩‍🎓 Identitas Mahasiswa

* **Nama:** Siti Magfiratun Warahmah
* **NIM:** 230104040059
* **Kelas:** TI23B
* **Dosen:** Muhayat, M.IT
* [cite_start]**Resource:** `movies` (Sesuai digit akhir NIM 9) [cite: 759]

---

## 🚀 Deskripsi API

API ini adalah layanan RESTful sederhana yang dibangun menggunakan **Node.js** dan **Express.js**. [cite_start]API ini tidak menggunakan database eksternal, melainkan mengelola data dummy (data film) yang disimpan dalam memori (file `.js`)[cite: 741].

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
    git clone [URL_GITHUB_KAMU]
    cd UTS-WSE-230104040059
    ```

2.  **Install Dependencies:**
    Buka terminal di folder proyek dan jalankan:
    ```bash
    npm install
    ```

3.  **Jalankan Server:**
    [cite_start]Untuk menjalankan server dalam mode development (sesuai instruksi soal [cite: 755]):
    ```bash
    npm run dev
    ```

4.  **Server Aktif:**
    [cite_start]Server akan berjalan di port default `3000`[cite: 753].
    `http://localhost:3000`

---

## 📖 Tabel Endpoint API

Berikut adalah semua endpoint yang tersedia untuk resource `movies`:

| Method | Endpoint | Deskripsi | Status Sukses / Gagal |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/info` | [cite_start]Informasi identitas API & pembuat [cite: 761] | `200 OK` |
| `GET` | `/api/movies` | [cite_start]Ambil semua data film [cite: 761] | `200 OK` |
| `GET` | `/api/movies/:id` | [cite_start]Ambil satu data film berdasarkan ID [cite: 761] | `200 OK` / `404 Not Found` |
| `POST` | `/api/movies` | [cite_start]Tambah data film baru [cite: 761] | `201 Created` / `400 Bad Request` |
| `PUT` | `/api/movies/:id` | [cite_start]Update data film berdasarkan ID [cite: 761] | `200 OK` / `400 Bad Request` / `404 Not Found` |
| `DELETE`| `/api/movies/:id` | [cite_start]Hapus data film berdasarkan ID [cite: 761] | `204 No Content` / `404 Not Found` |

---

## 🌟 Penerapan 7 Prinsip RESTful API

[cite_start]Proyek ini menerapkan 7 prinsip RESTful API sesuai materi perkuliahan[cite: 757]:

1.  **Resource-Oriented URI:**
    Menggunakan *Uniform Resource Identifier* (URI) yang berorientasi pada resource (kata benda jamak), yaitu `/api/movies`.

2.  **Proper HTTP Methods:**
    Memanfaatkan method HTTP (`GET`, `POST`, `PUT`, `DELETE`) sesuai dengan fungsinya untuk operasi CRUD.

3.  **Stateless Communication:**
    Server tidak menyimpan *state* atau *session* dari klien. Setiap request dari klien bersifat independen dan harus berisi semua informasi yang dibutuhkan.

4.  **Consistent Status Codes:**
    [cite_start]Menggunakan HTTP status code secara konsisten untuk menandakan hasil dari request (mis. `200` untuk sukses, `201` untuk created, `204` untuk delete, `400` untuk validasi gagal, dan `404` jika data tidak ditemukan)[cite: 757].

5.  **JSON Representation:**
    [cite_start]Semua pertukaran data antara klien dan server (body request dan response) menggunakan format **JSON** yang seragam[cite: 752].

6.  **Validation & Error Handling:**
    [cite_start]Menerapkan validasi di sisi server untuk *field* wajib (yaitu `title` dan `genre` untuk resource `movies`)[cite: 759]. Jika validasi gagal, server akan merespon dengan status `400 Bad Request` dan pesan error yang jelas.

7.  **Discoverability:**
    [cite_start]Menyediakan endpoint `GET /api/info` [cite: 754] sebagai metadata service, yang memberikan informasi dasar tentang API, pembuat, dan deskripsinya.