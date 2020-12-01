const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/',ctrl.users.index);
router.get('/',ctrl.users.show);
router.post('/',ctrl.users.create);
router.put('/',ctrl.users.update);
router.delete('/',ctrl.users.destroy);

module.exports = router;