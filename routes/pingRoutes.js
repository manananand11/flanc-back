// routes/pingRoutes.js
import express from 'express';
import userController from '../controllers/userController.js';
import passport from '../config/passport.js';

const router = express.Router();

// Use Passport JWT authentication to secure this route
router.get('/userinfo', passport.authenticate('jwt', { session: false }), userController.getUserInfo);
router.get('/ping', (req, res) => {
    res.status(200).json({ message: 'Pong!' });
});

export default router;
