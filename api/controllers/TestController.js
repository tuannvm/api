/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var TestController = {
  index: function (req,res) {
    Test.create({
      name: req.param('name'),
      date: req.param('date'),
      creator: req.param('creator'),
      content: req.param('content')
    },
    /*var a = {
      name: req.param('name'),
      date: req.param('date'),
      creator: req.param('creator'),
      content: req.param('content')
    }
    res.json(a.name);*/

  },
  show: function (req,res) {
    Test.find().exec(function (data) {
      res.json(data);
    })
  }
};

module.exports = TestController;



