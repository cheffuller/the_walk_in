const url = `${process.env.REACT_APP_API_URL}cart/user/`;

const cartAction = (cart) => {
  return {
    type: 'FETCH_CART',
    value: cart,
  };
};

export const fetchCart = (id) => {
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
        value: { quantity, price } 
    }
}

export const updateCartID = (id) => {
    return {
        type: 'UPDATE_CART_ID',
        value: id
    }
}