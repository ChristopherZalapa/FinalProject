const db = require('../models');

const index = (req, res) => {
  db.Entry.find({user:req.params.id}).then((foundEntries) => {
    res.json({ entries: foundEntries })

  }).catch((err) => {

    console.log('Error in entries.index', err);
    res.json({ Error: 'Unable to get your data' })

  });

};

const show = (req, res) => {
  db.Entry.findById(req.params.id).then((foundEntry) => {

    res.json({ entry: foundEntry })

  }).catch((err) => {

    console.log('Error in entry.show', err);
    res.json({ Error: 'Unable to get your data' })

  });

};

const create = (req, res) => {
  console.log(req.body);
  
  db.Entry.create(req.body, (err, newEntry) => {
    if (err) return console.log(err);
    console.log("new entry Created");
    
    
    db.User.findById(req.body.user, (err, foundUser) => {
      if (err) return console.log(err);
      console.log(foundUser)
      foundUser.parties.push(newEntry._id);
      foundUser.save((err, savedUser) => {
        if (err) return console.log(err);

        res.json(savedUser);

      })
      
    })
  })

};

const update = (req, res) => {
  db.Entry.findByIdAndUpdate(
    req.params.id,
    {$set: req.body},
    { new: true }).then((updateEntry) => {

      res.json({ entry: updateEntry })

    }).catch((err) => {

      console.log('Error in entry.update', err);
      res.json({ Error: 'Unable to Update data' })

    });

};

const destroy = (req, res) => {
  console.log('Server Response');
  

  db.Entry.findByIdAndDelete(req.params.id).then((deleteEntry) => {
    res.json({ entry: deleteEntry })
  }).catch((err) => {

    console.log('Error in entry.destroy', err);
    res.json({ Error: 'Unable to Delete data' })
    
  });

};



module.exports = {
  index,
  show,
  create,
  update,
  destroy
}