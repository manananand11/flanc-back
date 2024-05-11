import sequelize from '../config/database.js';
import User from './User.js';
import Skill from './Skill.js';
import UserSkill from './UserSkill.js';
import Project from './Project.js';
import UserProject from './UserProject.js';
import ProjectBid from './ProjectBid.js';
import ProjectSkill from './ProjectSkill.js';

// Define associations here

// User has many Projects (as a recruiter)
User.hasMany(Project, { foreignKey: 'userId', as: 'projects' });

// Projects belong to a User (recruiter)
Project.belongsTo(User, { foreignKey: 'userId', as: 'recruiter' });

// Many-to-Many relationship between Users and Skills through UserSkill
User.belongsToMany(Skill, { through: UserSkill, foreignKey: 'userId', otherKey: 'skillId' });
Skill.belongsToMany(User, { through: UserSkill, foreignKey: 'skillId', otherKey: 'userId' });

// Many-to-Many relationship between Users and Projects (as freelancers)
User.belongsToMany(Project, { through: UserProject, foreignKey: 'userId', otherKey: 'projectId' });
Project.belongsToMany(User, { through: UserProject, foreignKey: 'projectId', otherKey: 'userId', as: 'freelancers' });

// One-to-Many relationship between Project and ProjectBids
Project.hasMany(ProjectBid, { foreignKey: 'projectId' });
ProjectBid.belongsTo(Project, { foreignKey: 'projectId' });

// Many-to-Many relationship between Projects and Skills through ProjectSkill
Project.belongsToMany(Skill, { through: ProjectSkill, foreignKey: 'projectId', otherKey: 'skillId' });
Skill.belongsToMany(Project, { through: ProjectSkill, foreignKey: 'skillId', otherKey: 'projectId' });

// Export all models and sequelize instance
export { sequelize, User, Skill, UserSkill, Project, UserProject, ProjectBid, ProjectSkill };
