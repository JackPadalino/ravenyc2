const router = require('express').Router();

//router.use('/year',require('./year'));
router.use('/months', require('./months'));
router.use('/days', require('./days'));
router.use('/events', require('./events'));

module.exports = router;