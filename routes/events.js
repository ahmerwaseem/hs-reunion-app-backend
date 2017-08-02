var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://awaseem:null@localhost:5432/hsreunion');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully. Events');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database: Events', err);
//   });

const eventTable = 
    sequelize.define('events', {
        name: Sequelize.STRING,
        weekday : Sequelize.STRING,
        month: Sequelize.STRING,
        day : Sequelize.STRING,
        year: Sequelize.STRING,
        time: Sequelize.STRING,
        cost: Sequelize.STRING,
        description: Sequelize.STRING,
        city : Sequelize.STRING,
        state : Sequelize.STRING,
        zipcode : Sequelize.STRING,
        address : Sequelize.STRING,
        location: Sequelize.STRING
}, {
    timestamps: false
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  eventTable.findAll()
    .then(result=>{
      res.json(result);

    })


});

module.exports = router;

  // res.json([
  //   { id: "24",
  //     name: "Get Together1",
  //     weekday : "Friday",
  //     month: "August",
  //     day : "11",
  //     year: "2017",
  //     time: "6:30",
  //     cost: "15.00",
  //     description: "This is a description",
  //     city : "City",
  //     state : "State",
  //     zipCode : "23233",
  //     address : "address",
  //     location: "State park" },

  //   { id : "23",
  //     name: "Get Together2",
  //     weekday : "Friday",
  //     month: "August",
  //     day : "11",
  //     year: "2017",
  //     time: "6:30",
  //     cost: "15.00",
  //     desc: "This is a description",
  //     city : "City",
  //     state : "State",
  //     zipCode : "23233",
  //     address : "address" },
  // ]);