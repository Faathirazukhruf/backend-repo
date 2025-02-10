"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("../controller/api");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
// Route untuk update data user
router.post('/update-user-data', authMiddleware_1.authMiddleware, api_1.updateUserData);
// Route untuk fetch data user
router.get('/fetch-user-data/:uid', authMiddleware_1.authMiddleware, api_1.fetchUserData);
exports.default = router;
