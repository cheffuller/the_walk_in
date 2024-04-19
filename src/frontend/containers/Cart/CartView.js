import { connect } from 'react-redux'
import CartView from '../../components/Cart/CartView'
import { updateCart } from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: (quantity, price) => dispatch(updateCart(quantity, price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)