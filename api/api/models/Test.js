/**
* Test.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var Test = {

  attributes: {
    name: {type: 'string'},
    date: {type: 'string'},
    creator: {type: 'string'},
    content: {type: 'string'}
  },

  mindex: function (inputs,cb) {
    Test.create({
      name: inputs.name,
      date: inputs.date,
      creator: inputs.creator,
      content: inputs.content
    })
      .exec(cb);
  },
  mshow: function (cb) {
    //Test.find().exec(cb);
    'aaa'
      .exec(cb);
  }
};

module.exports = Test;
