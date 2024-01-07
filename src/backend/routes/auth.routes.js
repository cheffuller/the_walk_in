module.exports = app => {  
    const authController = require('../controllers/auth.controller');
    var router = require('express').Router();  
    
    router.post('/', authController.login);

    app.use('/api/login', router);
};