// routes/projectRoutes.js
import express from 'express';
import ProjectController from '../controllers/ProjectController.js';

const router = express.Router();

router.post('/', ProjectController.createProject); // Create a new project
router.get('/', ProjectController.getAllProjects); // Get all projects
router.get('/:id', ProjectController.getProjectById); // Get a project by ID
router.put('/:id', ProjectController.updateProject); // Update a project
router.delete('/:id', ProjectController.deleteProject); // Delete a project

export default router;
