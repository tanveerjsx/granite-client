import { GET_PRODUCTS, GET_USER_PRODUCTS,GET_PRODUCT_CATEGORIES } from "../actions/productActions";

const initState = {
    products: [],
    userProducts: [],
    categories:[],
}

const productReducers = (state = initState, actions) => {
    console.log("Reducer set", actions)
    switch (actions.type) {
        case GET_PRODUCTS:
            state = {
                ...state,
                products: actions.products
            }
            break;
        case GET_USER_PRODUCTS:
            state = {
                ...state,
                userProducts: actions.userProducts
            }
            break;
        case GET_PRODUCT_CATEGORIES:
            state = {
                ...state,
                categories: actions.categories
            }
            break;
        default:
            break;
    }
    return state;
}
export default productReducers;