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
exports.fetchUserData = exports.updateUserData = void 0;
const firebaseConfig_1 = require("../config/firebaseConfig");
// Mengupdate data user di Firestore
const updateUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid, totalAverageWeightRatings, numberOfRents, recentlyActive } = req.body;
    try {
        yield firebaseConfig_1.db.collection('USERS').doc(uid).update({
            totalAverageWeightRatings,
            numberOfRents,
            recentlyActive,
        });
        res.status(200).json({ message: 'User data updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user data', error });
    }
});
exports.updateUserData = updateUserData;
// Mengambil data user dari Firestore
const fetchUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    try {
        const userDoc = yield firebaseConfig_1.db.collection('USERS').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(userDoc.data());
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
    }
});
exports.fetchUserData = fetchUserData;
