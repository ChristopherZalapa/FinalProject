const db = require('../models');

const index = (req, res) => {
  db.User.find({}).then((foundUsers) => {
    res.json({ users: foundUsers })

  }).catch((err) => {
    console.log('Error in users.index', err);
    res.json({ Error: 'Unable to get your data' })

  });

};




module.exports = {
  index,
}