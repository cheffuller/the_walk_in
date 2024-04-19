import { connect } from 'react-redux'
import ProductDetail from '../../components/Product/ProductDetail'
import { updateCart, updateCartID } from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: (quantity, price) => dispatch(updateCart(quantity, price)),
        updateCartID: id => dispatch(updateCartID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)