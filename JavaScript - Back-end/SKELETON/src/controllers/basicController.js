const { isUser } = require('../middlewares/routeGuardMiddleware');
const basicService = require('../services/basicService');
const userService = require('../services/userService');
const { parseError } = require('../utils/mongooseErrorParser');
const router = require('express').Router(); //Direclty generate a router


//Create
router.get('/create', isUser, async (req, res) => {
    res.render('items/create', { pageTitle: 'Create ' }); //Change to what is needed
});

router.post('/create', isUser, async (req, res) => {
    const { name, city, rooms, imageUrl } = req.body;
    const owner = req.user._id;

    try {
        await basicService.create({ name, city, rooms, imageUrl, owner });

    } catch (err) {
        const error = parseError(err);
        return res.render('items/create', { name, city, rooms, imageUrl, error, pageTitle: 'Create ' }); //Change to what is needed
    }

    res.redirect('/'); //Change to what is needed
});

//Details
router.get('/details/:itemId', async (req, res) => {
    try {
        let item = await basicService.getOne(req.params.itemId);
        if (req.user) {
            item.isOwner = (req.user._id == item.owner.toString())
            item.hasBooked = item.clients.some(x => x == req.user._id);
        }
        res.render('items/details', { ...item, pageTitle: item.name }); //Change to what is needed

    } catch (error) {
        return res.status('404').end();
    }

});

//Delete
router.get('/delete/:itemId', isUser, async (req, res) => {
    try {
        let item = await basicService.getOne(req.params.itemId);
        if (item.owner.toString() != req.user._id) {
            return res.status('401').end();
        }
        let deleteditem = await basicService.deleteOne(req.params.itemId, req.user._id);
        if (!deleteditem) {
            throw new Error('Cannot delete item');
        }
        res.redirect('/')
    } catch (error) {
        res.redirect('/items/details/' + req.params.itemId)
    }
});

//Edit
router.get('/edit/:itemId', isUser, async (req, res) => {
    try {
        let item = await basicService.getOne(req.params.itemId);
        if (item.owner.toString() != req.user._id) {
            return res.status('401').end();
        }

        res.render('items/edit', { ...item, pageTitle: ('Edit ' + item.name) });
    } catch (err) {
        console.log(parseError(err));
        res.redirect('/items/details/' + req.params.itemId);
    }
});

router.post('/edit/:itemId', isUser, async (req, res) => {
    try {
        let item = await basicService.getOne(req.params.itemId);
        if (item.owner.toString() != req.user._id) {
            return res.status('401').end();
        }

        await basicService.updateOne(req.params.itemId, req.user._id, req.body);
        res.redirect('/items/details/' + req.params.itemId);
    } catch (err) {
        let error = parseError(err);
        res.render('items/edit', { ...req.body, error, _id: req.params.itemId, pageTitle: ('Edit ' + item.name) });
    }
});

//Book
router.get('/book/:itemId', isUser, async (req, res) => {
    try {
        await basicService.pushToField(req.params.itemId, req.user._id, 'clients');
        await userService.pushToField(req.user._id, req.params.itemId, 'reservations');
    } catch (error) {
        console.log(error);
    }

    res.redirect('/items/details/' + req.params.itemId);
})


module.exports = router;