var bcrypt = require('bcrypt');
/**
* Test.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var Test = {
  adapter: 'disk',
  attributes: {
    name: {type: 'string'},
    encryptName: {type: 'string'},
    date: {type: 'string'},
    creator: {type: 'string'},
    content: {type: 'string'}
  },

  index: function (inputs,cb) {
    Test.create({
      name: inputs.name,
      date: inputs.date,
      creator: inputs.creator,
      content: inputs.content
    })
      .exec(cb);
  },
  show: function (cb) {
    Test.find().exec(cb);
  },
  // Lifecycle Callbacks
  beforeCreate: function (values, cb) {

    // Encrypt password
    bcrypt.hash(values.name, 10, function(err, hash) {
      if(err) return cb(err);
      values.name = hash;
      console.log(hash);
      //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();
    });
  }
};


module.exports = Test;
