module.exports = app => {  
    const user = require('../controllers/user.controller');
    var router = require('express').Router();  
    
    router.post('/', user.create);
    router.get('/', user.findAll);
    router.get('/:id', user.findOne);
    router.get('/name/:username', user.findByUsername)
    router.put('/:id', user.update);
    router.delete('/:id', user.delete);

    app.use('/api/user', router);
};