import { ART_ADD,GET_ALL_ART, GET_ONE_ART } from "./type_action";
import FormData from "form-data";
import axios from "axios";
const baseUrl = "http://localhost:4000/arts";

export const addNewArt = (payload) => {
  return {
    type: ART_ADD,
    payload,
  };
};

export const getAllArt = (payload) => {
  return {
    type : GET_ALL_ART,
    payload
  }
}

export const getOneArt = (payload) => {
  return {
    type : GET_ONE_ART,
    payload
  }
} 

export const fetchOneArt = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(baseUrl + `/${id}`)
      console.log(data)
      dispatch(getOneArt(data))
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export const fetchAllArt = (filter,search) => {
  return async (dispatch) => {
    try {
      const {data} =  await axios.get(baseUrl,{
        params : {filter,search}
      })
      console.log(data)
      dispatch(getAllArt(data))
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
} 

export const newArt = (input) => {
  return async (dispatch) => {
    try {
      let filesToUpload;
      const form = new FormData();
      console.log(input)
      console.log(input.files);

      if (input.files.length > 1){
        filesToUpload = input.files.map((el) => {
          return el
        });
      } else {
        filesToUpload = input.files.map((el) => {
          return el
        });
      }

      console.log(filesToUpload)

      filesToUpload.forEach((el) => {
        console.log(el,"dari append files")
        form.append("uploadedFile", el,el.name);
      });
      form.append("name", input.name);
      form.append("price", input.price);
      form.append("CategoryId", input.CategoryId);
      form.append("description", input.description);

      console.log(form.getAll("uploadedFile"), "form data)())(");
      console.log(input, "dari thunk add new art");
      const { data } = await axios.post(baseUrl, form, {
        headers: {
          access_token: localStorage.access_token,
        },
      });

      console.log(data);
      dispatch(addNewArt(data));
      return data;
    } catch (error) {
      throw error;
    }
  };
};
