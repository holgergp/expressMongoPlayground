var db = require('../db');

exports.create = function(user, cb) {
    var collection = db.get().collection('usercollection');
    collection.save(user, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database');
        cb();
    });

};

exports.retrieve = function(cb) {
    var collection = db.get().collection('usercollection');
    collection.find().toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
        cb(result);
    })

};


exports.replaceDocument = function(id, user, cb) {
    var collection = db.get().collection('usercollection');
    var idStructure = {'_id':id}
    collection.replaceOne(idStructure, user, (err, result) => {
        if (err) return console.log(err);

        console.log('update to database');
        cb();
    });


};

exports.updateName = function(userName, newUsename, cb) {
    var collection = db.get().collection('usercollection');
    var nameStructure = {'username':userName};
    var nameReplacer =  {
        $set: { "username": newUsename },

    }
    collection.updateOne(nameStructure, nameReplacer, (err, result) => {
        if (err) return console.log(err);

    console.log('Update Name to database');
    cb();
});


};

