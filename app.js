import express from 'express';
import cors from 'cors';
import { sequelize } from './models/index.js';  // Ensure all models and their associations are imported
import User from './models/User.js';
import passport from './config/passport.js';
import authRoutes from './routes/authRoutes.js';
import pingRoutes from './routes/pingRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use('/auth', authRoutes);
app.use('/api', pingRoutes); // Use the ping route under the /api endpoint
app.use('/api/projects', projectRoutes);
// Sync database and then start the server
sequelize.sync({ force: false }) // Set `force` to `true` to drop and re-create tables
    .then(() => {
        console.log('Database synchronized successfully.');
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });
