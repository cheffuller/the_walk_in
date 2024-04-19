import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { fetchCart, updateCart } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: (id) => dispatch(fetchCart(id)),
        updateCart: (quantity, price) => dispatch(updateCart(quantity, price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)