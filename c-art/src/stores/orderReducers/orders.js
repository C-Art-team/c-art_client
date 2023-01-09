import { GET_ALL_ORDERS } from '../../actions/type_action'

const orderState = {
    orders: []
}

export default function orderReducer(state = orderState, action) {
    switch (action.type) {

        case GET_ALL_ORDERS:
            return { ...state, orders: action.payload};
        default:
            return state

    }
} 