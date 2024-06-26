module.exports = app => {  
    const cart = require('../controllers/cart.controller');
    var router = require('express').Router();  
    
    router.post('/:user_id', cart.create);
    router.get('/', cart.findAll);
    router.get('/:id', cart.findByPk);
    router.get('/user/:id', cart.findByUser)
    router.put('/:id', cart.update);
    router.delete('/:id', cart.delete);

    app.use('/api/cart', router);
};