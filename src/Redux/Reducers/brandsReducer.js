
const SET_BRANDS = 'SET_BRANDS'

let initState = {
   brands: []
}


const brandsReducer = (state = initState, action) => {

   switch (action.type) {
      case SET_BRANDS: {
         return {
            ...state,
            brands: action.data
         }
      }
      default: {
         return state
      }
   }
}

export const setBrands = (data) => ({ type: SET_BRANDS, data })


export default brandsReducer