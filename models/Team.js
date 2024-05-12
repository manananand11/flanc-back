// models/Team.js
import mongoose from '../config/mongoose.js';

const TeamSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  about: { type: String, required: true },
  popularity: { type: Number, required: true },
  completion_expectation: { type: Number },
  members: [{
    name: { type: String, required: true },
    about: { type: String, required: true },
    skills: [String]
  }],
  skills: [String]
});

const Team = mongoose.model('Team', TeamSchema);

export default Team;

