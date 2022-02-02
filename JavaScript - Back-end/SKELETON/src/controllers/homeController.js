const router = require('express').Router(); //Direclty generate a router


router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;