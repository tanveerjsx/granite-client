import { base_url } from "../../constants";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_USER_PRODUCTS = 'GET_USER_PRODUCTS';
export const GET_PRODUCT_CATEGORIES = 'GET_PRODUCT_CATEGORIES';

export const getProducts =  () => {
    return async dispatch => {
        try{
            const response = await fetch(`${base_url}/products`);
            const jsonResponse = await response.json();
            if(response.status == 200){
                dispatch({
                    type: GET_PRODUCTS,
                    products: jsonResponse.message
                });
            }

            return jsonResponse;

        }catch(error){
            console.log(error);
        }

    }
}

export const getUserProducts =  (userId) => {
    return async dispatch => {
        try{
            const response = await fetch(`${base_url}/users?vendor=true`);
            const jsonResponse = await response.json();
            if(response.status == 200){
                dispatch({
                    type: GET_USER_PRODUCTS,
                    userProducts: jsonResponse
                });
            }
            return jsonResponse;

        }catch(error){
            console.log(error);
        }

    }
}

export const getCategoriesList =  () => {
    return async dispatch => {
        try{
            const response = await fetch(`${base_url}/category`);
            const jsonResponse = await response.json();
            if(response.status == 200){
                dispatch({
                    type: GET_PRODUCT_CATEGORIES,
                    categories: jsonResponse.message
                });
            }

            return jsonResponse;

        }catch(error){
            console.log(error);
        }

    }
}