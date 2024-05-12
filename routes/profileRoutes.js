// routes/profileRoutes.js
import express from 'express';
import ProfileController from '../controllers/ProfileController.js';

const router = express.Router();

router.post('/', ProfileController.createProfile);
router.get('/', ProfileController.getProfiles);
router.get('/:id', ProfileController.getProfileById);
router.put('/:id', ProfileController.updateProfile);
router.delete('/:id', ProfileController.deleteProfile);

export default router;

