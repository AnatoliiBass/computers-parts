import React from 'react'
import { connect } from "react-redux"
import { apiGetUsers, apiGetUsersParts } from '../../API/api'
import { follow, setCurrentPage, setTotalUsers, setUsers, togleIsFetching, unfollow } from "../../Redux/Reducers/usersReducer"
import Users from "./Users"

class UsersListContainer extends React.Component {

   componentDidMount() {
      this.props.togleIsFetching(true)
      apiGetUsers()
         .then(data => {
            this.props.setTotalUsers(data.length)
         })
      apiGetUsersParts(this.props.currentPage, this.props.sizePage)
         .then(data => {
            this.props.setUsers(data)
         }).then(() => { setTimeout(() => { this.props.togleIsFetching(false) }, 2000) })
   }

   helperFunc = (event) => {
      this.props.togleIsFetching(true)
      this.props.setCurrentPage(+event.target.textContent)
      apiGetUsersParts(+event.target.textContent, this.props.sizePage)
         .then(data => {
            this.props.setUsers(data)
         }).then(() => { setTimeout(() => { this.props.togleIsFetching(false) }, 2000) })

   }

   render() {

      return (
         <Users helperFunc={this.helperFunc} totalUsers={this.props.totalUsers} sizePage={this.props.sizePage}
            currentPage={this.props.currentPage} users={this.props.users} follow={this.props.follow}
            unfollow={this.props.unfollow} isFetching={this.props.isFetching} />)
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.users.users,
      sizePage: state.users.sizePage,
      totalUsers: state.users.totalUsers,
      currentPage: state.users.currentPage,
      isFetching: state.users.isFetching
   }
}


export default connect(mapStateToProps,
   { setUsers, follow, unfollow, setCurrentPage, setTotalUsers, togleIsFetching })(UsersListContainer)
