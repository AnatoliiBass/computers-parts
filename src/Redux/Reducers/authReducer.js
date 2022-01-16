const SET_ACTIVE_USER = 'SET_ACTIVE_USER'
const CLEAR_ACTIVE_USER = 'CLEAR_ACTIVE_USER'

const initState = {
   activeUserName: '',
   isAuth: false
}

const authReducer = (state = initState, action) => {

   switch (action.type) {
      case CLEAR_ACTIVE_USER: {
         localStorage.clear()
         return {
            ...state,
            activeUserName: '',
            isAuth: false
         }
      }
      case SET_ACTIVE_USER: {
         const name = localStorage
            .getItem('CognitoIdentityServiceProvider.35pot0bdlttp9on7co0ihbgvqn.LastAuthUser')?.toUpperCase()
         return {
            ...state,
            activeUserName: name,
            isAuth: name ? true : false
         }
      }
      default: {
         return state
      }
   }
}

export const clearActiveUser = () => ({ type: CLEAR_ACTIVE_USER })
export const setActiveUser = () => ({ type: SET_ACTIVE_USER })


export default authReducer