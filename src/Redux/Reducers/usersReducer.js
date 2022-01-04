
const SET_USERS = 'SET_USERS'
const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'

let initState = {
   users: []
}


const usersReducer = (state = initState, action) => {



   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user)
         }
      }
      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user)
         }
      }
      case SET_USERS: {

         return {
            ...state,
            users: [...action.data]
         }
      }

      default: {
         return state
      }
   }
}

export const setUsersCreator = (data) => ({ type: SET_USERS, data })
export const followCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId })

export default usersReducer