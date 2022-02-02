const router = require('express').Router(); //Direclty generate a router

const auth = require('../services/authenticationService');
const { AUTH_COOKIE_NAME } = require('../constants');
const { isGuest } = require('../middlewares/routeGuardMiddleware');
const { parseError } = require('../utils/mongooseErrorParser.js');

//Login
router.get('/login', isGuest, (req, res) => {
    res.render('authentication/login', { pageTitle: 'Login' });
});

router.post('/login', isGuest, async (req, res) => {
    const { username, password } = req.body; //Cange according to what is needed for login
    try {
        let token = await auth.login({ username, password });
        res.cookie(AUTH_COOKIE_NAME, token);
        res.redirect('/');
    } catch (err) {
        let error = parseError(err);
        return res.render('authentication/login', { error, pageTitle: 'Login', username });
    }
});

//Registration
router.get('/register', isGuest, (req, res) => {
    res.render('authentication/register', { pageTitle: 'Register' });
});

router.post('/register', isGuest, async (req, res) => {
    //Change datafileds accordingly
    const { username, password, repeatPassword } = req.body;

    try {
        let user = await auth.register({ username, password, repeatPassword });
    } catch (err) {
        error = parseError(err);
        return res.render('authentication/register', { error, username, password, repeatPassword, pageTitle: 'Register' });
    }
    let token = await auth.login({ username, password });
    res.cookie(AUTH_COOKIE_NAME, token);
    res.redirect('/');
});

//Logout

router.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);

    res.redirect('/');
})
module.exports = router;