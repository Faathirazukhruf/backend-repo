"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.updateUser = void 0;
const firebaseConfig_1 = require("../config/firebaseConfig");
// Fungsi untuk mengupdate user di Firestore
const updateUser = (uid, user) => __awaiter(void 0, void 0, void 0, function* () {
    yield firebaseConfig_1.db.collection('USERS').doc(uid).update(user); // Mengupdate hanya sebagian data
});
exports.updateUser = updateUser;
// Fungsi untuk mengambil user berdasarkan uid dari Firestore
const getUserById = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    const userDoc = yield firebaseConfig_1.db.collection('USERS').doc(uid).get();
    return userDoc.exists ? userDoc.data() : null;
});
exports.getUserById = getUserById;
