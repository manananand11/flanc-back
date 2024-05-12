// models/Project.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Project = sequelize.define('Project', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
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
    popularity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    timestamps: true
});

export default Project;
