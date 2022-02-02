const path = require('path');
const cookieParser = require('cookie-parser');
const { BASE_TITLE } = require('../constants');

const { auth } = require('../middlewares/authenticationMiddleware');

const initExpress = (app, express) => {
    app.locals.pageTitle = BASE_TITLE;
    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static(path.resolve(__dirname, '../static/')));
    app.use(cookieParser());
    app.use(auth);
}

module.exports = initExpress;