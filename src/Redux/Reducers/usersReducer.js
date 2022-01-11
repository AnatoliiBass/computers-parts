import { apiGetUsers, apiGetUsersParts } from "../../API/api"

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS = 'SET_USERS'
const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'
const TOGLE_FOLLOW_PROGRESS = 'TOGLE_FOLLOW_PROGRESS'

let initState = {
   users: [],
   sizePage: 3,
   totalUsers: 0,
   currentPage: 1,
   isFetching: false,
   followInProgress: []
}


const usersReducer = (state = initState, action) => {
   switch (action.type) {
      case TOGLE_FOLLOW_PROGRESS: {
         return {
            ...state,
            followInProgress: action.isProgress ? [...state.followInProgress, action.userId]
               : state.followInProgress.filter(item => item !== action.userId)
         }
      }
      case TOGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         }
      }
      case SET_TOTAL_USERS: {
         return {
            ...state,
            totalUsers: action.total
         }
      }
      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage
         }
      }
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
            users: action.data
         }
      }

      default: {
         return state
      }
   }
}
export const togleFollowProgress = (isProgress, userId) => ({ type: TOGLE_FOLLOW_PROGRESS, isProgress, userId })
export const togleIsFetching = (isFetching) => ({ type: TOGLE_IS_FETCHING, isFetching })
export const setTotalUsers = (total) => ({ type: SET_TOTAL_USERS, total })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsers = (data) => ({ type: SET_USERS, data })
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })

export const getUsersThunk = () => (dispatch) => {
   dispatch(togleIsFetching(true))
   apiGetUsers().then(data => { dispatch(setTotalUsers(data.length)) })
}

export const getUsersPartsThunk = (currentPage, sizePage) => (dispatch) => {
   dispatch(togleIsFetching(true))
   dispatch(setCurrentPage(currentPage))
   apiGetUsersParts(currentPage, sizePage).then(data => { dispatch(setUsers(data)) })
      .then(() => { setTimeout(() => { dispatch(togleIsFetching(false)) }, 2000) })
}

export const unFollowThunk = (userId) => (dispatch) => {
   dispatch(togleFollowProgress(true, userId))
   dispatch(unfollow(userId))
   setTimeout(() => {
      dispatch(togleFollowProgress(false, userId))
   }, 2000)
}

export const followThunk = (userId) => (dispatch) => {
   dispatch(togleFollowProgress(true, userId))
   dispatch(follow(userId))
   setTimeout(() => {
      dispatch(togleFollowProgress(false, userId))
   }, 2000)
}

export default usersReducer