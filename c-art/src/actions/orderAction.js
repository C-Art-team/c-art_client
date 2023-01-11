import { GET_ALL_ORDERS } from "./type_action";
import axios from "axios";
const BASE_URL = "http://localhost:4000";

export const getAllOrders = (payload) => {
  return {
    type: GET_ALL_ORDERS,
    payload,
  };
};

export const fetchAllOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${BASE_URL}/orders`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(getAllOrders(data));
      return data;
    } catch (error) {
      throw error;
    }
  };
};

export const addOneOrder = (payload) => {
  return async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${BASE_URL}/orders`,
        data: payload,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      fetch(fetchAllOrders);
      return data;
    } catch (error) {
      console.log(error, "dari thunk add order");
      throw error;
    }
  };
};

export const deleteOneOrder = (id) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "DELETE",
        url: `${BASE_URL}/orders/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }).then(() => {
        dispatch(fetchAllOrders());
      });
    } catch (error) {
      throw error;
    }
  };
};

export const payOrder = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${BASE_URL}/orders/pay/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      window.snap.pay(data.token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          dispatch(update(id)).then(() => dispatch(fetchAllOrders()));
        },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const update = (id) => {
  return async (dispatch) => {
    try {
      axios({
        method: "PATCH",
        url: `${BASE_URL}/orders/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchAllOrders());
    } catch (error) {
      throw error;
    }
  };
};
