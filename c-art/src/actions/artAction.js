import { ART_ADD } from "./type_action";
import FormData from "form-data";
import axios from "axios";
const baseUrl = "http://localhost:4000/arts";

export const addNewArt = (payload) => {
  return {
    type: ART_ADD,
    payload,
  };
};

export const newArt = (input) => {
  return async (dispatch) => {
    try {
      let filesToUpload;
      const form = new FormData();
      console.log(input.files);

      if (input.files[0].length > 1){
        filesToUpload = input.files[0].map((el) => {
          return el
        });
      } else {
        filesToUpload = input.files.map((el) => {
          return el[0];
        });
      }

      filesToUpload.forEach((el) => {
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
