import { GET_ALL_CATEGORIES } from "../../actions/type_action"

export default function categoryReducer(state = {categories : []} ,action) {
  switch(action.type) {
    case GET_ALL_CATEGORIES : 
    return { ...state, categories : action.payload}
    default :
    return state
  }
}