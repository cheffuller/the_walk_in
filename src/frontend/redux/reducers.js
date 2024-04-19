import { combineReducers } from 'redux'

const user = (state = null) => state

const cart = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_CART':
            return action.value
        case 'UPDATE_CART':
            const newCart = { ...state }
            newCart.item_quantity += action.value.quantity
            newCart.total_price = Number(newCart.total_price) + Number(action.value.price)
            return newCart
        case 'UPDATE_CART_ID':
            const newCartID = { ...state }
            newCartID.id = action.value
            return newCartID
        default:
            return state
    }
}

export default combineReducers({ user, cart })