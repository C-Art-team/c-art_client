import { ART_ADD, GET_ALL_ART, GET_ART_BY_AUTHOR_ID, GET_ONE_ART } from "../../actions/type_action";

export default function artReducer(state = { arts: [], art: {}, myArt: [] }, action) {
  switch (action.type) {
    case GET_ALL_ART:
      return { ...state, arts: action.payload };
    case GET_ONE_ART:
      return { ...state, art: action.payload };
    case ART_ADD:
      return { ...state, arts: [...state.arts, action.payload] };
    case GET_ART_BY_AUTHOR_ID:
      return { ...state, myArt: action.payload };
    default:
      return state;
  }
}
