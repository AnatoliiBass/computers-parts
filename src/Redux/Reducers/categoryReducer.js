const ADD_CATEGORY = 'ADD_CATEGORY'
const UPDATE_CATEGORY = 'UPDATE-CATEGORY'

const categoryReducer = (state, action) => {
   switch (action.type) {
      case ADD_CATEGORY: {
         const newCategory = {
            name: state.newinfo,
            id: String(parseInt(state.categories[state.categories.length - 1].id) + 1),
            items: [],
         }
         if (newCategory.name) {
            state.categories.push(newCategory)
            state.newinfo = ''
         }
         return state
      }
      case UPDATE_CATEGORY: {
         state.newinfo = action.valueName
         return state
      }
      default: {
         return state
      }
   }
}

export const addCategoryCreator = () => ({ type: ADD_CATEGORY })
export const updateCategoryCreator = (name) => ({ type: UPDATE_CATEGORY, valueName: name })

export default categoryReducer