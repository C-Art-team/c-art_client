import { USER_REGISTER, USER_LOGIN,TOGGLE_MODAL } from "../../actions/type_action";

export default function userReducer(
  state = { loged: {}, registered: {}, toggle : false },
  action
) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loged: action.payload };
    case USER_REGISTER:
      return { ...state, registered: action.payload };
    case TOGGLE_MODAL : 
      return {...state,toggle : !state.toggle}
    default:
      return state;
  }
}
