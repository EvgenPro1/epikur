import {ADD_PRODUCTS, CHANGE_PRODUCT,GET_PRODUCTS} from './actions'

export const createAddProducts = (payload = '') => {
    return {
        type: ADD_PRODUCTS,
        payload,
    }
}
export const createChangeProduct = (payload) => {
    return {
        type: CHANGE_PRODUCT,
        payload,
    }
}

export const _createGetProducts = (payload) => {
    return {
        type: GET_PRODUCTS,
        payload,
    }
}

