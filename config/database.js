import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('flanc', 'flanc', 'password8', {
    host: '93.127.166.49',
    dialect: 'postgres'
});
export default sequelize;
