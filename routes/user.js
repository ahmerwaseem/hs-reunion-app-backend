var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://awaseem:null@localhost:5432/hsreunion');
var reservationsTable = require('./reservations');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully. Users');
  })
  .catch(err => {
    console.error('Unable to connect to the database: Users', err);
  });

const userTable = 
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

//userTable.hasMany(reservationsTable, {foreignKey: 'userid', as: 'id'});

// userTable.findOne({ 
//   attributes:[ 'email', 'password'] , 
//   where: {email: 'ahmerw007@gmail.com'} })
//   .then(user => {
//     console.log(user.dataValues.email, user.dataValues.password)
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   ;
/* GET users listing. */
router.post('/whosgoing', function(req, res, next) {
  const { eventid } = req.body;
 sequelize.query('select firstname,lastname, reservations.eventid  from users inner join reservations  on users.id = reservations.userid',
  { type: sequelize.QueryTypes.SELECT }
).then(projects => {
  res.json(projects);
})
});


router.post('/exists', function(req,res,next){
  const { email } = req.body;
  userTable.findOne({
  attributes:[ 'email' ],
  where: {email: email.toLowerCase() } })
  .then(result => {
    if( result !== null) {
      res.json({
        "exists": "true",
      })
    }
    else{
      res.json({
        "exists" : "false"
      });

    }
  })
  .catch(err => {
      res.json({"Error":err});
  });
});


router.post('/register', function(req,res,next){
  const { email, password, firstName, lastName, occupation, bio } = req.body.formValues;
  //console.log("in registered api", email, password, firstName, lastName, occupation, bio);
  userTable.create({ 
    email: email, 
    password: password,
    firstname: firstName, 
    lastname: lastName, 
    occupation: occupation, 
    bio : bio})
    .then(task => {
      console.log(task);
  // you can now access the newly created task via the variable task
})
  
  res.json({
    "status": "success",
    "registered" : email,
  })
});

router.post('/login', function(req,res,next){
  const { password, email } = req.body;

  userTable.findOne({ 
  attributes:[ 'id', 'email', 'password', 'firstname','lastname','occupation','bio' ] , 
  where: {email: email.toLowerCase(), password: password } })
  .then(user => {
    const { id, email, firstname, lastname, occupation, bio } = user.dataValues;
    console.log(id, email, "it worked")
    res.json({
      "status": "success",
      "userInfo": { 
        'userId': id,
        'userEmail': email,
        'userFirstName': firstname,
        'userLastName': lastname,
        'userOccupation': occupation,
        'userBio': bio,
      }
    })
  })
  .catch(err => {
      res.json({
        "status" : "error"
      });
  });
  
});

module.exports = router;
module.exports = router;
