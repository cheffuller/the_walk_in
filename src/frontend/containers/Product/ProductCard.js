import { connect } from 'react-redux'
import ProductCard from '../../components/Product/ProductCard'
import { updateCart, updateCartID } from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: (quantity, price, cartID) => dispatch(updateCart(quantity, price, cartID)),
        updateCartID: id => dispatch(updateCartID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)