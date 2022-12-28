import { legacy_createStore as createStore, applyMiddleware } from "redux"
import rootReducer from "./combine_reducer/combine_reducer"
import thunk from "redux-thunk"

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store