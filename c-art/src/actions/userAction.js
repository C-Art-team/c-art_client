import { USER_LOGIN, USER_REGISTER, ONE_USER } from "./type_action";
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

export const oneUser = (payload) => {
  return {
    type: ONE_USER,
    payload,
  };
};

export const handleLogin = (input) => {
  return async (dispatch) => {
    try {
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

export const handleVerify = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:4000/users/register/verify/${token}`, {
        headers: {
          "Content-Type": "application/json",
        },
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

export const handleFacebookLogin = (fbRes) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://localhost:4000/users/facebookLogin",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            email: fbRes.email,
            username: fbRes.name,
          },
        }
      );

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

export const handleGoogleLogin = (google_token) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:4000/users/googleLogin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          google_token,
        },
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

export const viewProfile = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:4000/users/profile", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(oneUser(data));
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
      return data;
    } catch (error) {
      throw error;
    }
  };
};