const db = require('../models');

const index = (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if (err) return console.log(err);
    
    const context = {
      users: allUsers,
      title: 'All Users'
    };

    res.json(context);

  });
};

const show = (req, res) => {
  db.User.findById(req.params.userId)
    .populate('parties')
    .exec((err, foundUser) => {
      if (err) return console.log(err);

      const context = {
        user: foundUser,
      };

      res.json(context);
    
    });
};

const create = (req, res) => {
  db.User.create(req.body, (err, newUser) => {
    if (err) return console.log(err);

    res.json(newUser);

  });
};

const update = (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    {new: true},
    (err, updatedUser) => {
      if (err) return console.log(err);

      res.json(updatedUser);
    }
  );
};

const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.userId, (err, deletedUser) => {
    if (err) return console.log(err);

    db.Entry.deleteMany({_id: { $in: deletedUser.entries }}, (err) => {
      if (err) return console.log(err)

      res.json(deletedUser);
    })
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}