var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://awaseem:null@localhost:5432/hsreunion');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully. reservations');
  })
  .catch(err => {
    console.error('Unable to connect to the database: Events', err);
  });

const reservationsTable = 
    sequelize.define('reservations', {
        userid : Sequelize.INTEGER,
        eventid: Sequelize.INTEGER,
        tickets : Sequelize.INTEGER,
        transid: Sequelize.STRING,
}, {
    timestamps: false
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  reservationsTable.findAll()
    .then(result=>{
      res.json(result);

    })


});

router.post('/rsvp', function(req, res, next) {
  const { userid, eventid } = req.body;
  reservationsTable.create({
      userid: userid, //this will be your id that you want to delete
      eventid: eventid
  })
    .then(result=>{
      reservationsTable.findAll()
      .then(result=>{
        res.json(result);

      })

    })

});

router.post('/cancel', function(req, res, next) {
  const { userid, eventid } = req.body;
  console.log(userid, eventid, req.body);
  reservationsTable.destroy({
    where: {
        userid: userid, //this will be your id that you want to delete
        eventid: eventid
    }
  })
  .then(function(rowDeleted){ // rowDeleted will return number of rows deleted
    reservationsTable.findAll()
    .then(result=>{
      res.json(result);

    })
  })
});

module.exports = router;
