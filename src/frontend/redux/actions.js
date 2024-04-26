const cartAction = (cart) => {
  return {
    type: 'FETCH_CART',
    value: cart,
  };
};

export const fetchCart = (id) => {
  const url = `${process.env.REACT_APP_API_URL}cart/user/`;
  return (dispatch) => {
    fetch(`${url}${id}`)
      .then((res) => res.json())
      .then((response) => {
        dispatch(cartAction(response));
      });
  };
};

export const updateCart = (quantity, price) => {

  return {
    type: 'UPDATE_CART',
    value: { quantity, price },
  };
};

export const updateCartID = (id) => {
  return {
    type: 'UPDATE_CART_ID',
    value: id,
  };
};

const productAction = (products) => {
  return {
    type: 'FETCH_PRODUCTS',
    value: products,
  };
};

export const fetchProducts = () => {
  const url = `${process.env.REACT_APP_API_URL}product/`;
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        dispatch(productAction(response));
      });
  };
};

const cartProductsAction = (cartProducts) => {
  return {
    type: 'FETCH_CART_PRODUCTS',
    value: cartProducts,
  };
};

export const fetchCartProducts = (cartID) => {
  const url = `${process.env.REACT_APP_API_URL}cart__product/${cartID}`;
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        dispatch(cartProductsAction(response));
      });
  };
};

export const updateCartProducts = (idx, quantity) => {
  return {
    type: 'UPDATE_CART_PRODUCTS',
    value: { idx, quantity },
  };
};
