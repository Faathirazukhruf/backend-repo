import { Request, Response } from 'express';
import { db } from '../config/firebaseConfig';

// Mengupdate data user di Firestore
export const updateUserData = async (req: Request, res: Response) => {
  const { uid, totalAverageWeightRatings, numberOfRents, recentlyActive } = req.body;

  try {
    await db.collection('USERS').doc(uid).update({
      totalAverageWeightRatings,
      numberOfRents,
      recentlyActive,
    });
    res.status(200).json({ message: 'User data updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user data', error });
  }
};

// Mengambil data user dari Firestore
export const fetchUserData = async (req: Request, res: Response) => {
  const { uid } = req.params;

  try {
    const userDoc = await db.collection('USERS').doc(uid).get();
    if (!userDoc.exists) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(userDoc.data());
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data', error });
  }
};
