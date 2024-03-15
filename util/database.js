const Sequelize = require('sequelize')

const sequelize = new Sequelize('cricket-careers','root', 'yourpassword', {
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize