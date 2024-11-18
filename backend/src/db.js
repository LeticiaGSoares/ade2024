import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('ade2024', 'root', 'MySql@3360', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;