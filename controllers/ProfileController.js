// controllers/ProfileController.js
import Profile from '../models/Profile.js';

class ProfileController {
  async createProfile(req, res) {
    try {
      const profile = new Profile(req.body);
      await profile.save();
      res.status(201).json(profile);
    } catch (error) {
      res.status(400).json({ message: "Error creating profile", error });
    }
  }

  async getProfiles(req, res) {
    try {
      const profiles = await Profile.find();
      res.status(200).json(profiles);
    } catch (error) {
      res.status(500).json({ message: "Error fetching profiles", error });
    }
  }

  async getProfileById(req, res) {
    try {
      const { id } = req.params;
      const profile = await Profile.findById(id);
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
      res.status(200).json(profile);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving profile", error });
    }
  }

  async updateProfile(req, res) {
    try {
      const { id } = req.params;
      const profile = await Profile.findByIdAndUpdate(id, req.body, { new: true });
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
      res.status(200).json(profile);
    } catch (error) {
      res.status(400).json({ message: "Error updating profile", error });
    }
  }

  async deleteProfile(req, res) {
    try {
      const { id } = req.params;
      const result = await Profile.findByIdAndDelete(id);
      if (!result) {
        return res.status(404).json({ message: "Profile not found" });
      }
      res.status(200).json({ message: "Profile deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting profile", error });
    }
  }
}

export default new ProfileController();

