import { apiGetBrands, apiGetCategories, apiGetProducts, apiGetProductsActive, apiGetProductsParts } from "../../API/api"
import { setBrands } from "./brandsReducer"
import { setCategories } from "./categoryReducer"

const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PRODUCTS = 'SET_TOTAL_USERS'
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'
const SET_MINMAX = 'SET_MINMAX'

let initState = {
   products: [],
   sizePage: 6,
   totalProducts: 0,
   currentPage: 1,
   isFetching: false,
   minPrice: 0,
   maxPrice: 0
}


const productsReducer = (state = initState, action) => {

   switch (action.type) {
      case SET_MINMAX: {
         return {
            ...state,
            minPrice: action.minmax[0],
            maxPrice: action.minmax[1]
         }
      }
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
export const setMinMax = (minmax) => ({ type: SET_MINMAX, minmax })
export const setProducts = (data) => ({ type: SET_PRODUCTS, data })
export const togleIsFetching = (isFetching) => ({ type: TOGLE_IS_FETCHING, isFetching })
export const setTotalProducts = (total) => ({ type: SET_TOTAL_PRODUCTS, total })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const fillStateThunk = () => (dispatch) => {
   apiGetCategories().then(data => { dispatch(setCategories(data)) })
   apiGetBrands().then(data => { dispatch(setBrands(data)) })
   apiGetProducts().then(data => {
      dispatch(setProducts(data))
      dispatch(setMinMax([Math.min(...data.map(item => Math.floor(+item.price))),
      Math.max(...data.map(item => Math.ceil(+item.price)))]))
   })
}
export const getProductsActiveThunk = (activeCategory) => (dispatch) => {
   apiGetProductsActive(activeCategory)
      .then(data => {
         dispatch(setTotalProducts(data.length))
      })
}

export const getProductsPartsThunk = (activeCategory, currentPage, sizePage) => (dispatch) => {
   dispatch(togleIsFetching(true))
   dispatch(setCurrentPage(currentPage))
   apiGetProductsParts(activeCategory, currentPage, sizePage)
      .then(data => {
         dispatch(setProducts(data))
      }).then(() => { setTimeout(() => { dispatch(togleIsFetching(false)) }, 2000) })
}

export default productsReducer