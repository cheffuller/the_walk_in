import { connect } from 'react-redux'
import ProductCard from '../../components/Product/ProductCard'
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)