const Cart = require('../models/cart.model');
const Product = require('../models/product.model');
const Cart__Product = require('../models/cart__product.model');

// Create Cart__Product
exports.create = async (req, res) => {
  const cart_id = req.body.cart_id;
  const product_id = req.body.product_id;
  const cart__product = await Cart__Product.findOne({
    where: { product_id: product_id, cart_id: cart_id },
  });
  
  const cart = await Cart.findByPk(cart_id)

  try {
    const cart = await Cart.findByPk(cart_id);
    if (cart) {
        cart.item_quantity += 1;
        await cart.save();
    } else {
        console.error("Cart not found with ID:", cart_id);
    }
} catch (error) {
    console.error("Error occurred while updating cart:", error);
}

  if (cart__product) {
    cart__product.quantity += 1;
    await Cart__Product.update(
      { quantity: cart__product.quantity },
      {
        where: {
          cart_id: cart_id,
          product_id: product_id,
        },
      }
    );
  } else {
    const product = await Product.findByPk(product_id);
    cart
      .addProduct(product)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({
          message:
            err.message ||
            'Some error occurred while creating the cart__product.',
        });
      });
  }
};

// Find All Products in One Cart
exports.findAll = async (req, res) => {
  const cart_id = req.params.id;
  Cart__Product.findAll({ where: { cart_id: cart_id } })
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Products with cart id=${cart_id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error retrieving Products with cart_id=' + cart_id,
      });
    });
};

exports.update = (req, res) => {
  const cart_id = req.params.id
  const product_id = req.body.product_id
  Cart__Product.update(req.body, {where: {cart_id: cart_id, product_id}})
  .then((num) => {
    if (num == 1) {
      res.json({
        message: 'Cart__Product was updated successfully.',
      });
    } else {
      res.json({
        message: `Cannot update Cart__Product`,
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      message: 'Error updating Cart__Product',
    });
  });
}

// Delete Cart__Product
exports.delete = async (req, res) => {
  const cart = await Cart.findByPk(req.body.cart_id);
  const product = await Product.findByPk(req.body.product_id);

  try {
    cart.removeProduct(product).then((num) => {
      if (num == 1) {
        res.json({
          message: 'Cart__product was deleted successfully!',
        });
      } else {
        res.json({
          message: `Cannot delete cart__product.`,
        });
      }
    });
  } catch (err) {
    res.status(500).json({
      message: 'Could not delete cart__product',
    });
  }
};
