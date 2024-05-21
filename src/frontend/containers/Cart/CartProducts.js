import { connect } from 'react-redux';
import CartProducts from '../../components/Cart/CartProducts';
import {
  fetchVendor,
} from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVendor: (vendorID) => dispatch(fetchVendor(vendorID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);