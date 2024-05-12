// controllers/TeamController.js
import Team from '../models/Team.js';

class TeamController {
  async createTeam(req, res) {
    try {
      const team = new Team(req.body);
      await team.save();
      res.status(201).json(team);
    } catch (error) {
      res.status(400).json({ message: 'Error creating team', error });
    }
  }

  async getTeams(req, res) {
    try {
      const teams = await Team.find();
      res.status(200).json(teams);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching teams', error });
    }
  }

  async updateTeam(req, res) {
    try {
      const { id } = req.params;
      const team = await Team.findByIdAndUpdate(id, req.body, { new: true });
      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
      res.status(200).json(team);
    } catch (error) {
      res.status(400).json({ message: 'Error updating team', error });
    }
  }

  async deleteTeam(req, res) {
    try {
      const { id } = req.params;
      const result = await Team.findByIdAndDelete(id);
      if (!result) {
        return res.status(404).json({ message: 'Team not found' });
      }
      res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting team', error });
    }
  }
}

export default new TeamController();

