const db = require('../models');

const index = (req, res) => {
  db.Entry.find({}).then((foundEntries) => {
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
  db.Entry.create(req.body).then((savedEntry) => {

    res.status(201).json({ entry: savedEntry });

  }).catch((err) => {

    console.log('Error in entry.create', err);
    res.json({ Error: 'Unable to submit your data' })

  });

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