import { ART_ADD } from "./type_action";
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
      const form = new FormData();
      form.append("name", input.name);
      form.append("price", input.price);
      form.append("CategoryId", input.CategoryId);
      form.append("description", input.description);
      input.files.forEach((el) => {
        form.append("uploadedFile", el);
      });

      console.log(form.getAll('uploadedFile'), "form data)())(");
      console.log(input, "dari thunk add new art");
      const response = await fetch(baseUrl, {
        method: "post",
        headers : {
          access_token : localStorage.access_token
        },
        body: form,
      });

      if (response.ok) {
        throw await response.json();
      }
      const data = await response.json();
      console.log(data);
      dispatch(addNewArt(data));
      return data;
    } catch (error) {
      throw error;
    }
  };
};
