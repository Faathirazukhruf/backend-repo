import * as admin from 'firebase-admin';  // Mengimpor Firebase Admin SDK

declare module 'express' {
  export interface Request {
    user?: admin.auth.DecodedIdToken;  // Properti `user` berisi token terverifikasi dari Firebase Authentication
  }
}
