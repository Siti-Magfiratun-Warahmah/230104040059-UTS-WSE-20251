// src/app.js

const express = require("express");
const app = express();
const port = 3000; // Sesuai instruksi, port default 3000 [cite: 52]

// Import router untuk movies
const movieRoutes = require("./routes/movie.routes");

// Middleware untuk membaca JSON dari body request
app.use(express.json());

// Endpoint /api/info (Prinsip RESTful ke-7: Discoverability) [cite: 56, 53]
app.get("/api/info", (req, res) => {
  res.status(200).json({ // 
    service: "UTS WSE API - Movies",
    author: "Siti Magfiratun Warahmah",
    nim: "230104040059",
    description: "API untuk mengelola data film (movies) ",
  });
});

// Gunakan routes yang sudah kita buat
// Ini menerapkan Prinsip RESTful ke-1: Resource-Oriented URI [cite: 56]
// (Contoh: /api/movies)
app.use("/api/movies", movieRoutes);

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});