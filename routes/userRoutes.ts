import { Router } from 'express';
import { updateUserData, fetchUserData } from '../controller/api'; // Pastikan controller diimpor
import { authMiddleware } from '../middleware/authMiddleware'; // Jika ada middleware autentikasi

const router = Router();

// Route untuk mengupdate data user (gunakan POST)
router.post('/update-user-data', authMiddleware, updateUserData);

// Route untuk mengambil data user (gunakan GET)
router.get('/fetch-user-data/:uid', authMiddleware, fetchUserData);

export default router;
