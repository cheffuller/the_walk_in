import { connect } from 'react-redux';
import CartView from '../../components/Cart/CartView';
import {
  fetchCartProducts,
  updateCart,
  updateCartProducts,
} from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
    cartProducts: state.cartProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (quantity, price) => dispatch(updateCart(quantity, price)),
    fetchCartProducts: (cartID) => dispatch(fetchCartProducts(cartID)),
    updateCartProducts: (idx, quantity) =>
      dispatch(updateCartProducts(idx, quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartView);
