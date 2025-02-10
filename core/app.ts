import express, { Request, Response } from 'express';
import cors from 'cors'; // Import CORS
import userRoutes from '../routes/userRoutes';
import dotenv from 'dotenv';

// Inisialisasi dotenv untuk mengelola variabel environment
dotenv.config();

// Inisialisasi Express app
const app = express();

// Konfigurasi CORS untuk mengizinkan akses dari domain tertentu atau semua domain
const corsOptions = {
  origin: '*', // Kamu bisa ganti '*' dengan URL frontend Next.js jika sudah tahu (misal: 'http://localhost:3001')
  optionsSuccessStatus: 200 // Mengatasi masalah dengan browser yang tidak mendukung status 204
};

app.use(cors(corsOptions)); // Aktifkan CORS untuk semua route
app.use(express.json()); // Middleware untuk parsing JSON

// Route dasar untuk memastikan server berjalan
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running with CORS enabled.');
});

// Menggunakan route user
app.use('/api/users', userRoutes); // Prefix '/api/users' untuk route terkait user

// Menentukan port yang digunakan server
const PORT = process.env.PORT || 3000;

// Menjalankan server di port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
