import { USER_LOGIN, USER_REGISTER, TOGGLE_MODAL } from "./type_action";
import axios from "axios";

export const userLogin = (payload) => {
  return {
    type: USER_LOGIN,
    payload,
  };
};

export const userRegister = (payload) => {
  return {
    type: USER_REGISTER,
    payload,
  };
};

export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL,
  };
};

export const handleLogin = (input) => {
  return async (dispatch) => {
    try {
      console.log(input, "dari thunk login");
      const response = await fetch("http://localhost:4000/users/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw await response.json();
      }
      const data = await response.json();
      dispatch(userLogin(data));
      return data;
    } catch (error) {
      throw error;
    }
  };
};

export const handleRegister = (input) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:4000/users/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw await response.json();
      }
      const data = await response.json();
      dispatch(userRegister(data));
      return data;
    } catch (error) {
      throw error;
    }
  };
};

export const editProfile = (input, id) => {
  return async () => {
    try {
      const { data } = await axios.patch(
        `http://localhost:4000/users/edit/${id}`,
        input,
        {}
      );
      // const data = await response.json()
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  };
};
