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
    }).exec(function (err) {
      if(err) {
        return res.negotiate(err);
      }
      res.ok("sucessful input!");
    });
    /*var a = {
      name: req.param('name'),
      date: req.param('date'),
      creator: req.param('creator'),
      content: req.param('content')
    }
    res.json(a.name);*/

  },
  show: function (req,res) {
    //res.json(Test.show);
    Test.find().exec(function (err,data) {
      res.json(data);
    })
  }

};

module.exports = TestController;



