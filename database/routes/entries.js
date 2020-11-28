const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/',ctrl.entries.index);
// router.get('/:id',ctrl.entries.show);
// router.get('/',ctrl.entries.create);
// router.get('/:id',ctrl.entries.update);
// router.get('/:id',ctrl.entries.destroy);

module.exports = router;