export default {
  user: {
    id: '',
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    company_id: '',
    admin: false,
  },
  cart: {
    id: '',
    item_quantity: '',
    total_price: '',
    status: true,
    user_id: '',
  },
  products: [{
    id: '',
    label: '',
    name: '',
    price: 0,
    vendor_id: ''
  }],
  cartProducts: [{
    cart_id: '',
    product_id: '',
    quantity: 0
  }]
};
