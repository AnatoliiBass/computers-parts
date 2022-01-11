import React from 'react'
import { connect } from "react-redux"
import { getUsersThunk, getUsersPartsThunk, unFollowThunk, followThunk } from "../../Redux/Reducers/usersReducer"
import Users from "./Users"

class UsersListContainer extends React.Component {

   componentDidMount() {
      this.props.getUsersThunk()
      this.props.getUsersPartsThunk(this.props.currentPage, this.props.sizePage)
   }

   helperPagination = (event) => {
      const current = +event.target.textContent
      this.props.getUsersPartsThunk(current, this.props.sizePage)
   }

   helperUnFollow = (userId) => {
      this.props.unFollowThunk(userId)
   }

   helperFollow = (userId) => {
      this.props.followThunk(userId)
   }


   render() {

      return (
         <Users helperPagination={this.helperPagination} helperUnFollow={this.helperUnFollow}
            helperFollow={this.helperFollow} totalUsers={this.props.totalUsers} sizePage={this.props.sizePage}
            currentPage={this.props.currentPage} users={this.props.users} isFetching={this.props.isFetching}
            followInProgress={this.props.followInProgress} />)
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.users.users,
      sizePage: state.users.sizePage,
      totalUsers: state.users.totalUsers,
      currentPage: state.users.currentPage,
      isFetching: state.users.isFetching,
      followInProgress: state.users.followInProgress
   }
}


export default connect(mapStateToProps, { getUsersThunk, getUsersPartsThunk, unFollowThunk, followThunk })(UsersListContainer)
