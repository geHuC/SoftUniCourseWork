const router = require('express').Router(); //Direclty generate a router

const homeCrontroller = require('./controllers/homeController');
const authenticationController = require('./controllers/authenticationController');

router.use(homeCrontroller);
router.use(authenticationController);
//Add route controllers


module.exports = router;