const User = require("../models/user.model.js");
const Sequelize = require("sequelize");

exports.login = async(req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({
        where: {
          username: username,
          password: password
        }
      });

      if(!user){
        res.status(402).json({
            success: false
        })
      }else{
        res.status(200).json({
            success: true
        })
     }
}