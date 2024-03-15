const sequelize = require('../util/database')
const Sequelize = require('sequelize')

const cricketer = sequelize.define('cricketer', {
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },

    name:{
        type:Sequelize.STRING,
        
        allowNull:false
    },

    date:Sequelize.DATE,

    url:Sequelize.STRING,

    birthplace:Sequelize.STRING,

    career: Sequelize.STRING,

    matches: Sequelize.INTEGER,

    score:Sequelize.INTEGER,

    fifties:Sequelize.INTEGER,

    centuries:Sequelize.INTEGER,

    wicket:Sequelize.INTEGER,

    average:Sequelize.INTEGER,
})

module.exports = cricketer