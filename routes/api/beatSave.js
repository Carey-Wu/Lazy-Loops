var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Beat = require("../../models/beat");

router.post('/beatSave', function(req, res) {
      var newBeat = new Beat({
        beat: req.body.beat,
	creator: req.body.username,
    date: Date.now,
      });
      console.log(newBeat);
      // save the beat
      newBeat.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Unable to create beat array'});
          
        }
        res.json({success: true, msg: 'Saved Beats'});
       
      });
    }
  );


router.get('/beatGet', function(req,res){
  db.Beat.findAll({}).then(function(newBeat){
    res.json(newBeat);
  });
})
  module.exports = router;