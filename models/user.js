var Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://awaseem:null@localhost:5432/hsreunion');

export const userTable = 
    sequelize.define('users', {
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        occupation: Sequelize.STRING,
        bio: Sequelize.STRING,
}, {
    timestamps: false
});

export const eventTable = 
    sequelize.define('events', {
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        occupation: Sequelize.STRING,
        bio: Sequelize.STRING,
}, {
    timestamps: false
});
