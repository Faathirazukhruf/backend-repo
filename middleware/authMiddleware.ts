import { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Menggunakan properti `user` di objek `req`
    next(); // Lanjutkan ke handler berikutnya
  } catch (error) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
};
