// config/mongoose.js
import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/flanc'; // Replace with your actual MongoDB URI

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

export default mongoose;

