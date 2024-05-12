// routes/teamRoutes.js
import express from 'express';
import TeamController from '../controllers/TeamController.js';

const router = express.Router();

router.post('/', TeamController.createTeam);
router.get('/', TeamController.getTeams);
router.put('/:id', TeamController.updateTeam);
router.delete('/:id', TeamController.deleteTeam);

export default router;

