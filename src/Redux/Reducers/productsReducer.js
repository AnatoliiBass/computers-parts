const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PRODUCTS = 'SET_TOTAL_USERS'
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'

let initState = {
   products: [],
   sizePage: 6,
   totalProducts: 0,
   currentPage: 1,
   isFetching: false
}


const productsReducer = (state = initState, action) => {

   switch (action.type) {
      case TOGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         }
      }
      case SET_TOTAL_PRODUCTS: {
         return {
            ...state,
            totalProducts: action.total
         }
      }
      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage
         }
      }
      case SET_PRODUCTS: {
         return {
            ...state,
            products: action.data
         }
      }
      default: {
         return state
      }
   }
}

export const setProducts = (data) => ({ type: SET_PRODUCTS, data })
export const togleIsFetching = (isFetching) => ({ type: TOGLE_IS_FETCHING, isFetching })
export const setTotalProducts = (total) => ({ type: SET_TOTAL_PRODUCTS, total })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export default productsReducer