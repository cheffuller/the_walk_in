import { connect } from 'react-redux'
import ProductShop from '../../components/Product/ProductShop'
import { fetchProducts } from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShop)