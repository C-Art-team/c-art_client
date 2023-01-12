import { ART_ADD, GET_ALL_ART, GET_ART_BY_AUTHOR_ID, GET_ONE_ART } from "./type_action";
import FormData from "form-data";
import axios from "axios";
const baseUrl = "http://api.c-art.site/arts";

export const addNewArt = (payload) => {
  return {
    type: ART_ADD,
    payload,
  };
};

export const getAllArt = (payload) => {
  return {
    type: GET_ALL_ART,
    payload
  }
}

export const getOneArt = (payload) => {
  return {
    type: GET_ONE_ART,
    payload
  }
}

const getArtById = (payload) => {
  return {
    type: GET_ART_BY_AUTHOR_ID,
    payload
  }
}

export const fetchOneArt = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(baseUrl + `/${id}`)
      dispatch(getOneArt(data))
      return data
    } catch (error) {
      throw error
    }
  }
}

export const fetchAllArt = (filter, search) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(baseUrl, {
        params: { filter, search }
      })
      dispatch(getAllArt(data))
      return data
    } catch (error) {
      throw error
    }
  }
}

export const newArt = (input) => {
  return async (dispatch) => {
    try {
      let filesToUpload;
      const form = new FormData();



      if (input.files.length > 1) {
        filesToUpload = input.files.map((el) => {
          return el
        });
      } else {
        filesToUpload = input.files.map((el) => {
          return el
        });
      }

      if (filesToUpload.length <= 1) {
        throw new Error("Please input at least 1 preview")
      }


      filesToUpload.forEach((el) => {
        form.append("uploadedFile", el, el.name);
      });
      form.append("name", input.name);
      form.append("price", input.price);
      form.append("CategoryId", input.CategoryId);
      form.append("description", input.description);

      const { data } = await axios.post(baseUrl, form, {
        headers: {
          access_token: localStorage.access_token,
        },
      });

      dispatch(addNewArt(data));
      return data;
    } catch (error) {
      throw error;
    }
  };
};

export const fetchArtByAuthorID = (forAuthen) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: baseUrl + '/myarts',
        headers: {access_token : forAuthen}
      })
      dispatch(getArtById(data))
    } catch (error) {
      throw error
    }
  }
}
