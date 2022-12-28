import { CHANGE_THEME } from "../../actions/type_action"

const initialState = { theme: 'dark' }

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.theme
            }
        default:
            return state
    }
}

export default themeReducer