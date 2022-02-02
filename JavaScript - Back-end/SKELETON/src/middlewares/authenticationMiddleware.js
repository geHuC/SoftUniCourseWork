const jwt = require('../utils/jwtUtility');
const { AUTH_COOKIE_NAME, JWT_TOKEN_SECRET } = require('../constants')

const auth = (req, res, next) => {
    let token = req.cookies[AUTH_COOKIE_NAME];

    if (token) {
        jwt.verify(token, JWT_TOKEN_SECRET)
            .then(decodedToken => {
                req.user = decodedToken;
                res.locals.user = decodedToken;
                next();
            })
            .catch(err => {
                res.clearCookie(AUTH_COOKIE_NAME);
                res.redirect('/login');
            });
    } else {
        next();
    }
}

module.exports = {
    auth,
}