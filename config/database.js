const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_database', 'root', '50320620', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
