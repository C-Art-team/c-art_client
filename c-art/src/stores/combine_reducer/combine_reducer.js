import { combineReducers } from "redux";
import themeReducer from "../theme_reducer/theme";
import categoryReducer from "../categoryReducers/categoryReducer";

const rootReducer = combineReducers({
    themeReducer,
    categoryReducer
})

export default rootReducer