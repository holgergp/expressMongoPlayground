var express = require('express');
var router = express.Router();
var userModel =  require('../models/userModel');


/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.retrieve(function(users) {
    res.json(users)
  })
});

router.put('/', (req, res) => {

  console.log(req.body);

  userModel.create(req.body, function (err, user) {
    res.sendStatus(200);
  });

});



router.post('/:userId', (req, res) => {
  var userId = req.params.userId;
console.log(req.body);
console.log(userId);


 userModel.replaceDocument(userId, req.body, function (err, user) {
    res.sendStatus(200);
  });


});

router.post('/:oldUsername/:newUsername', (req, res) => {
  var oldUsername = req.params.oldUsername;
  var newUsername = req.params.newUsername;
console.log(req.body);
console.log(oldUsername);
console.log(newUsername);


userModel.updateName(oldUsername, newUsername, function (err, user) {
  res.sendStatus(200);
});
});



module.exports = router;
