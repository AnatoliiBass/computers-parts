const ADD_CATEGORY = 'ADD_CATEGORY'
const UPDATE_CATEGORY = 'UPDATE-CATEGORY'
const SET_CATEGORY = 'SET_CATEGORY'
const SET_BRANDS = 'SET_BRANDS'
const SET_PRODUCTS = 'SET_PRODUCTS'

let initState = {
   categories: [],
   brands: [],
   products: [],
   newinfo: ""
}


const categoryReducer = (state = initState, action) => {

   switch (action.type) {
      case SET_CATEGORY: {
         return {
            ...state,
            categories: action.data
         }
      }
      case SET_BRANDS: {
         return {
            ...state,
            brands: action.data
         }
      }
      case SET_PRODUCTS: {
         return {
            ...state,
            products: action.data
         }
      }
      case ADD_CATEGORY: {
         const names = state.categories.map(item => item?.name)
         const newCategory = {
            name: state.newinfo,
            id: String(parseInt(state.categories[state.categories.length - 1].id) + 1),
            items: [],
         }
         let copy
         if ((newCategory.name) && !(names.includes(newCategory.name))) {
            copy = {
               ...state,
               newinfo: '',
               categories: [...state.categories, newCategory]
            }
         } else if (names.includes(newCategory.name)) {
            copy = {
               ...state,
               newinfo: ''
            }
         }
         return copy ?? state
      }
      case UPDATE_CATEGORY: {
         return {
            ...state,
            newinfo: action.valueName
         }
      }
      default: {
         return state
      }
   }
}
export const addCategoryCreator = () => ({ type: ADD_CATEGORY })
export const updateCategoryCreator = (name) => ({ type: UPDATE_CATEGORY, valueName: name })
export const setCategoriesCreator = (data) => ({ type: SET_CATEGORY, data })
export const setBrandsCreator = (data) => ({ type: SET_BRANDS, data })
export const setProductsCreator = (data) => ({ type: SET_PRODUCTS, data })

export default categoryReducer