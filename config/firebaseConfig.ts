import admin from 'firebase-admin';
import * as serviceAccount from './firebaseKey.json'; 

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
  
const db = admin.firestore();
export { db };
