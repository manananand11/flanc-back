// models/Profile.js
import mongoose from '../config/mongoose.js';

const ProfileSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  about: { type: String, required: true },
  popularity: { type: Number, required: true },
  skills: [String],
  userId: { type: Number, required: true }  // SQL database user ID
});

const Profile = mongoose.model('Profile', ProfileSchema);

export default Profile;

