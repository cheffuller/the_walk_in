import { combineReducers } from 'redux';

const user = (state = null) => state;

const cart = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CART':
      return action.value;
    case 'UPDATE_CART':
      const newCart = { ...state };
      newCart.item_quantity += action.value.quantity;
      newCart.total_price =
        Number(newCart.total_price) + Number(action.value.price);
      return newCart;
    case 'UPDATE_CART_ID':
      const newCartID = { ...state };
      newCartID.id = action.value;
      return newCartID;
    default:
      return state;
  }
};

const products = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return action.value;
    default:
      return state;
  }
};

const cartProducts = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CART_PRODUCTS':
      return action.value;
    case 'UPDATE_CART_PRODUCTS':
      const newCartProducts = [...state];
      const idx = action.value.idx;
      const quantity = Number(action.value.quantity);
      if (quantity === 0) {
        newCartProducts.splice(idx, 1);
      } else {
        newCartProducts[idx].quantity = quantity;
      }
      return newCartProducts;
    default:
      return state;
  }
};

export default combineReducers({ user, cart, products, cartProducts });
