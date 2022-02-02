const router = require('express').Router(); //Direclty generate a router


router.get('/', (req, res) => {
    res.render('home'); //Change to what is needed
});

module.exports = router;