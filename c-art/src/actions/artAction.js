import { ART_ADD } from "./type_action";
import FormData from 'form-data'
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
      const form = new FormData();

      function blobCreationFromURL(inputURI) {
        var binaryVal;

        // mime extension extraction
        var inputMIME = inputURI.split(",")[0].split(":")[1].split(";")[0];
        console.log(inputMIME)
        // Extract remaining part of URL and convert it to binary value
        if (inputURI.split(",")[0].indexOf("base64") >= 0)
          binaryVal = atob(inputURI.split(",")[1]);
        // Decoding of base64 encoded string
        else binaryVal = unescape(inputURI.split(",")[1]);

        // Store the bytes of the string to a typed array
        var blobArray = [];
        for (var index = 0; index < binaryVal.length; index++) {
          blobArray.push(binaryVal.charCodeAt(index));
        }

        return new Blob([blobArray], {
          type: inputMIME,
        });
      }

      const toFiles = input.files.map((el) => {
        const blobObject = blobCreationFromURL(el)
        return blobObject
      })

      // console.log(toFiles)
      toFiles.forEach((el) => {
        form.append('uploadedFile',el,el.originalname)
      })

      form.append("name", input.name);
      form.append("price", input.price);
      form.append("CategoryId", input.CategoryId);
      form.append("description", input.description);

      console.log(form.getAll("uploadedFile"), "form data)())(");
      console.log(input, "dari thunk add new art");
      const {data} = await axios.post(baseUrl,form, {
        headers: {
          access_token : localStorage.access_token
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
