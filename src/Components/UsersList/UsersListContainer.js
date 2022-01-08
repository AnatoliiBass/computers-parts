
import axios from 'axios'
import React from 'react'
import { connect } from "react-redux"
import { follow, setCurrentPage, setTotalUsers, setUsers, togleIsFetching, unfollow } from "../../Redux/Reducers/usersReducer"
import Users from "./Users"

class UsersListContainer extends React.Component {

   componentDidMount() {
      this.props.togleIsFetching(true)
      axios.get(`http://localhost:3013/users`)
         .then(responce => {
            this.props.setTotalUsers(responce.data.length)
         })
      axios.get(`http://localhost:3013/users?_page=${this.props.currentPage}&_limit=${this.props.sizePage}`)
         .then(responce => {
            this.props.setUsers(responce.data)
         }).then(() => { setTimeout(() => { this.props.togleIsFetching(false) }, 2000) })
   }

   helperFunc = (event) => {
      this.props.togleIsFetching(true)
      this.props.setCurrentPage(+event.target.textContent)
      axios.get(`http://localhost:3013/users?_page=${+event.target.textContent}&_limit=${this.props.sizePage}`)
         .then(responce => {
            this.props.setUsers(responce.data)
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
