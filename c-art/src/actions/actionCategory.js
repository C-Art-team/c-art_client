import { GET_ALL_CATEGORIES } from "./type_action";
const BASE_URL = 'http://localhost:4000/categories'

export const getAllCategory= (payload) => {
  return {
    type : GET_ALL_CATEGORIES,
    payload
  }
}

export const fetchAllCategory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL,{
        method:"get",
        headers : {
          "Content-Type" : 'application/json'
        }
      })

      if(!response.ok) {
        throw await response.json()
      }
      const data = await response.json()
      dispatch(getAllCategory(data))
    } catch (error) {
      throw error
    }
  }
}