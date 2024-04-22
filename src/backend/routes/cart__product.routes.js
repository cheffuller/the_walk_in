module.exports = app => {  
    const cart__product = require('../controllers/cart__product.controller');
    var router = require('express').Router();  
    
    router.post('/', cart__product.create);
    router.get('/:id', cart__product.findAll);
    router.put('/', cart__product.update)
    router.delete('/', cart__product.delete);

    app.use('/api/cart__product', router);
};