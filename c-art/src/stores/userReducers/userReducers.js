import { USER_REGISTER, USER_LOGIN,ONE_USER } from "../../actions/type_action";

export default function userReducer(
  state = { loged: {}, registered: {}, oneUser : {} },
  action
) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loged: action.payload };
    case USER_REGISTER:
      return { ...state, registered: action.payload };
    case ONE_USER : 
      return {...state,oneUser : action.payload}
    default:
      return state;
  }
}
