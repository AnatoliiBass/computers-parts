import { bg, flex, container, button } from './Header.module.css'
import Logo from '../UI/Logo/Logo'
import NavMenu from '../UI/NavMenu/NavMenu'
import { Button } from '@mui/material'
import Session from '../UI/Session/Session'
import Cart from '../UI/Cart/Cart'
import { NavLink } from 'react-router-dom'
import FormAuth from '../UI/FormAuth/FormAuth'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'
const Header = ({ getLogout }) => {
   const user = localStorage.getItem('CognitoIdentityServiceProvider.35pot0bdlttp9on7co0ihbgvqn.LastAuthUser').toUpperCase()
   // const signOut = () => {
   //    getLogout(true)
   // }
   return (<header className={bg}>
      <div className={container}>
         <div className={flex}>
            <NavLink to="/"><Logo /></NavLink>
            <NavMenu />
         </div>
         <div className={flex}>
            {/* <FormAuth /> */}
            <Session user={user} />
            {/* <Session user="UserName" />
            <Session user="Admin" /> */}
            {/* <NavLink to="/auth"><Button className={button} color="inherit">Log in</Button></NavLink> */}


            <NavLink to="/auth"><Button className={button} color="inherit">Log out</Button></NavLink>




            <Cart total={1} />
         </div>
      </div>
   </header>)
}

export default withAuthenticator(Header)