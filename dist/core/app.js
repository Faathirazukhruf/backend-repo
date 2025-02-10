"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // Import CORS
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
// Inisialisasi dotenv untuk mengelola variabel environment
dotenv_1.default.config();
// Inisialisasi Express app
const app = (0, express_1.default)();
// Konfigurasi CORS untuk mengizinkan akses dari domain tertentu atau semua domain
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // Mengatasi masalah dengan browser yang tidak mendukung status 204
};
app.use((0, cors_1.default)(corsOptions)); // Aktifkan CORS untuk semua route
app.use(express_1.default.json()); // Middleware untuk parsing JSON
// Route dasar untuk memastikan server berjalan
app.get('/', (req, res) => {
    res.send('Server is running with CORS enabled.');
});
// Menggunakan route user
app.use('/api/users', userRoutes_1.default); // Prefix '/api/users' untuk route terkait user
// Menentukan port yang digunakan server
const PORT = process.env.PORT || 3000;
// Menjalankan server di port yang ditentukan
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
