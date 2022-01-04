
import { connect } from "react-redux"
import { followCreator, setUsersCreator, unfollowCreator } from "../../Redux/Reducers/usersReducer"
import UsersList from "./UsersListF"


let mapStateToProps = (state) => {
   return {
      users: state.users.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setUsers: (data) => { dispatch(setUsersCreator(data)) },
      follow: (userId) => { dispatch(followCreator(userId)) },
      unfollow: (userId) => { dispatch(unfollowCreator(userId)) }

   }
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList)

export default UsersListContainer