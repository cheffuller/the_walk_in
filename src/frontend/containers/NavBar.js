import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { fetchCart, updateCart, fetchProducts } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: (id) => dispatch(fetchCart(id)),
        updateCart: (quantity, price) => dispatch(updateCart(quantity, price)),
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)