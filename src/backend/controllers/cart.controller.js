const Cart = require('../models/cart.model.js');

// Create Cart
exports.create = (req, res) => {
  const cart = {
    item_quantity: 0,
    total_price: 0,
    status: true,
    user_id: req.params.user_id,
  };
  Cart.create(cart)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || 'Some error occurred while creating the cart.',
      });
    });
};

// Find All Carts
exports.findAll = (req, res) => {
  Cart.findAll()
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Carts`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error retrieving Carts',
      });
    });
};

// Find Single Cart By Cart ID
exports.findByPk = (req, res) => {
  const id = req.params.id;
  Cart.findByPk(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find cart with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error retrieving cart with id=' + id,
      });
    });
};

// Find Single Cart By User ID
exports.findByUser = (req, res) => {
  const user_id = req.params.id;
  Cart.findOne({ where: { user_id: user_id, status: true } })
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find cart with user id=${user_id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error retrieving cart with user id=' + user_id,
      });
    });
};

// Update Cart
exports.update = async (req, res) => {
  const id = req.params.id;
  const quantity = req.body.quantity;
  const price = req.body.price;
  try {
    const cart = await Cart.findByPk(id);
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    cart.item_quantity += Number(quantity);
    cart.total_price = Number(cart.total_price) + Number(price);
    await cart.save()
    res.status(200).json(cart);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete Cart
exports.delete = (req, res) => {
  const id = req.params.id;
  Cart.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: 'Cart was deleted successfully!',
        });
      } else {
        res.json({
          message: `Cannot delete cart with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Could not delete cart with id=' + id,
      });
    });
};
