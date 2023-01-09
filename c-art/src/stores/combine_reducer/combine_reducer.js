import { combineReducers } from "redux";
import themeReducer from "../theme_reducer/theme";
import categoryReducer from "../categoryReducers/categoryReducer";
import userReducer from "../userReducers/userReducers";
import artReducer from "../artReducer/artReducer";
import orderReducer from "../orderReducers/orders";

const rootReducer = combineReducers({
    themeReducer,
    categoryReducer,
    userReducer,
    artReducer,
    orderReducer
})

export default rootReducer