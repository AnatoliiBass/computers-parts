const SET_ACTIVE_USER = 'SET_ACTIVE_USER'

const initState = {
   activeUserName: ''
}

const authReducer = (state = initState, action) => {

   switch (action.type) {
      case SET_ACTIVE_USER: {
         return {
            ...state,
            activeUserName: localStorage
               .getItem('CognitoIdentityServiceProvider.35pot0bdlttp9on7co0ihbgvqn.LastAuthUser')?.toUpperCase()
         }
      }
      default: {
         return state
      }
   }
}

export const setActiveUser = () => ({ type: SET_ACTIVE_USER })


export default authReducer