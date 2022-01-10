const ADD_CATEGORY = 'ADD_CATEGORY'
const UPDATE_CATEGORY = 'UPDATE-CATEGORY'
const SET_CATEGORY = 'SET_CATEGORY'
const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'

let initState = {
   categories: [],
   newinfo: "",
   activeCategory: ''
}


const categoryReducer = (state = initState, action) => {

   switch (action.type) {
      case SET_ACTIVE_CATEGORY: {
         return {
            ...state,
            activeCategory: action.category
         }
      }
      case SET_CATEGORY: {
         return {
            ...state,
            categories: action.data
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

export const setActiveCategory = (category) => ({ type: SET_ACTIVE_CATEGORY, category })
export const addCategory = () => ({ type: ADD_CATEGORY })
export const updateCategory = (name) => ({ type: UPDATE_CATEGORY, valueName: name })
export const setCategories = (data) => ({ type: SET_CATEGORY, data })

export default categoryReducer