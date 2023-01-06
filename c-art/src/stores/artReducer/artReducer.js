import {ART_ADD} from "../../actions/type_action"

export default function artReducer (state = {arts : [], art : {}},action) {
  switch(action.type) {
    case ART_ADD : 
    return {...state, arts : [...state.arts,action.payload]}
    default : 
    return state
  }
} 