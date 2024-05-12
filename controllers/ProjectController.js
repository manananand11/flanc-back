// controllers/ProjectController.js
import Project from '../models/Project.js';
import User from '../models/User.js';
import UserProject from '../models/UserProject.js';

class ProjectController {
    // Create a new project
    async createProject(req, res) {
        try {
            const { name, description, userId } = req.body;
            const project = await Project.create({ name, description, userId });
            res.status(201).json(project);
        } catch (error) {
            res.status(500).json({ message: "Failed to create project", error: error.message });
        }
    }

    // Get all projects
    async getAllProjects(req, res) {
        try {
            const projects = await Project.findAll();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ message: "Failed to retrieve projects", error: error.message });
        }
    }

    // Get a single project by ID
    async getProjectById(req, res) {
        try {
            const { id } = req.params;
            const project = await Project.findByPk(id);
            if (!project) {
                return res.status(404).json({ message: "Project not found" });
            }
            res.status(200).json(project);
        } catch (error) {
            res.status(500).json({ message: "Failed to retrieve project", error: error.message });
        }
    }

    // Update a project
    async updateProject(req, res) {
        try {
            const { id } = req.params;
            const { name, description } = req.body;
            const project = await Project.findByPk(id);
            if (!project) {
                return res.status(404).json({ message: "Project not found" });
            }
            project.name = name;
            project.description = description;
            await project.save();
            res.status(200).json(project);
        } catch (error) {
            res.status(500).json({ message: "Failed to update project", error: error.message });
        }
    }

    // Delete a project
    async deleteProject(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Project.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ message: "Project not found" });
            }
            res.status(200).json({ message: "Project deleted" });
        } catch (error) {
            res.status(500).json({ message: "Failed to delete project", error: error.message });
        }
    }
}

export default new ProjectController();
