// models/ProjectBid.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProjectBid = sequelize.define('ProjectBid', {
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Projects',
            key: 'id'
        }
    }
}, {
    timestamps: true
});

export default ProjectBid;
