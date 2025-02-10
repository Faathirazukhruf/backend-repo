import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';

// Fungsi untuk mengupdate user di Firestore
export const updateUser = async (uid: string, user: Partial<User>) => {
  await db.collection('USERS').doc(uid).update(user); // Mengupdate hanya sebagian data
};

// Fungsi untuk mengambil user berdasarkan uid dari Firestore
export const getUserById = async (uid: string) => {
  const userDoc = await db.collection('USERS').doc(uid).get();
  return userDoc.exists ? userDoc.data() : null;
};
