// models/UserSkill.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const UserSkill = sequelize.define('UserSkill', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
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

export default UserSkill;
