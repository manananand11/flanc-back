// models/ProjectSkill.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProjectSkill = sequelize.define('ProjectSkill', {
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Projects',
            key: 'id'
        }
    },
    skillId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Skills',
            key: 'id'
        }
    }
}, {
    timestamps: false
});

export default ProjectSkill;
