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
  db.User.findById(req.params.id)
    .populate('entry')
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
  console.log('Is Destroy Working?');
  
  db.User.findByIdAndDelete(req.params.id).then((err, deleteUser) => {
    if (err) return console.log("Could not delete user", err)

  
    // db.Entry.deleteMany({_id: { $in: deletedUser.entries }}, (err) => {
    //   if (err) return console.log(err)

      res.json(deleteUser);
    // })
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}