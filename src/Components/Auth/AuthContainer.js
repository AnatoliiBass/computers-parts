import React from 'react'
import Auth from './Auth'
import { connect } from "react-redux"
import { setActiveUser, clearActiveUser } from '../../Redux/Reducers/authReducer'

class AuthContainer extends React.Component {
   componentDidMount() {
      this.props.setActiveUser()
   }

   render() {
      return <Auth {...this.props} />
   }
}

let mapStateToProps = (state) => {
   return {
      name: state.auth.activeUserName,
      isAuth: state.auth.isAuth
   }
}


export default connect(mapStateToProps, { setActiveUser, clearActiveUser })(AuthContainer)
