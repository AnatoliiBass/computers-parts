import { apiDeleteCategory, apiSetCategory, apiUpdateCategory } from "../../API/api"

const ADD_CATEGORY = 'ADD_CATEGORY'
const UPDATE_CATEGORY = 'UPDATE-CATEGORY'
const SET_CATEGORY = 'SET_CATEGORY'
const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'
const DELETE_CATEGORY = 'DELETE_CATEGORY'


let initState = {
   categories: [],
   newinfo: '',
   activeCategory: '',
   newLastCategory: {}
}


const categoryReducer = (state = initState, action) => {

   switch (action.type) {
      case DELETE_CATEGORY: {
         if (!action.parent) {
            apiDeleteCategory(action.id)
            return {
               ...state,
               categories: state.categories.filter(i => i.id !== action.id)
            }
         }
         const current = state.categories.filter(i => i.id === action.parent)[0]
         apiUpdateCategory(current.id, {
            name: current.name,
            id: current.id,
            items: current.items.filter(item => item.id !== action.id)
         })
         return {
            ...state,
            categories: state.categories.map(i => i.id === action.parent ?
               { ...i, items: i.items.filter(el => el.id !== action.id) } : i)
         }
      }
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
         let names, newCategory, current
         if (state.activeCategory) {
            current = state.categories.filter(i => i.id === state.activeCategory)[0]
            names = current.items.map(item => item.name)
            newCategory = {
               name: state.newinfo,
               parent_id: state.activeCategory,
               id: String(parseInt(current.items[current.items.length - 1].id) + 1)
            }
         } else {
            names = state.categories.map(item => item.name)
            newCategory = {
               name: state.newinfo,
               id: String(parseInt(state.categories[state.categories.length - 1].id) + 1),
               items: [],
            }
         }
         let copy
         if ((newCategory.name) && !(names.includes(newCategory.name))) {
            if (state.activeCategory) {
               copy = {
                  ...state,
                  newinfo: '',
                  newLastCategory: newCategory,
                  categories: state.categories.map(i => i.id === state.activeCategory ?
                     { ...i, items: [...i.items, newCategory] } : i)
               }
               current = state.categories.filter(i => i.id === newCategory.parent_id)[0]
               apiUpdateCategory(current.id, {
                  name: current.name,
                  id: current.id,
                  items: [...current.items, newCategory]
               })
            } else {
               copy = {
                  ...state,
                  newinfo: '',
                  newLastCategory: newCategory,
                  categories: [...state.categories, newCategory]
               }
               apiSetCategory(newCategory)
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

export const deleteCategory = (id, parent = '') => ({ type: DELETE_CATEGORY, id, parent })
export const setActiveCategory = (category) => ({ type: SET_ACTIVE_CATEGORY, category })
export const addCategory = () => ({ type: ADD_CATEGORY })
export const updateCategory = (name) => ({ type: UPDATE_CATEGORY, valueName: name })
export const setCategories = (data) => ({ type: SET_CATEGORY, data })


export default categoryReducer