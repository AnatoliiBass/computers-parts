import { bg, flex, container, button } from './Header.module.css'
import Logo from '../UI/Logo/Logo'
import NavMenu from '../UI/NavMenu/NavMenu'
import { Button } from '@mui/material'
import Session from '../UI/Session/Session'
import Cart from '../UI/Cart/Cart'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Amplify } from 'aws-amplify'
import awsExports from './../../aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
Amplify.configure(awsExports)
const Header = () => {
   const getUser = () => {
      return localStorage.getItem('CognitoIdentityServiceProvider.35pot0bdlttp9on7co0ihbgvqn.LastAuthUser')?.toUpperCase()
   }
   const [user, setUser] = useState(getUser())
   const [clickLogin, setClickLogin] = useState(false)
   const helperAfterAuth = () => {
      setUser(getUser())
   }
   const helperSetUser = () => {
      localStorage.clear()
      setUser(getUser())
      setClickLogin(false)
   }
   const helperOpenAuth = () => {
      setClickLogin(true)
      setUser(getUser())
   }
   return (<header className={bg}>
      <div className={container}>
         <div className={flex}>
            <NavLink to="/"><Logo /></NavLink>
            <NavMenu />
         </div>
         <div className={flex}>
            <Session user={user ? user : 'Guest'} />

            {clickLogin ? <Authenticator style={{ position: "absolute", zIndex: 50 }} variation='modal' >{() => (
               <>
                  <Button onClick={helperSetUser} className={button} color="inherit">Log out</Button>
                  {helperAfterAuth()}
               </>
            )}</Authenticator> : <>{user ? <Button onClick={helperSetUser} className={button} color="inherit">Log out</Button> :
               <Button onClick={helperOpenAuth} className={button} color="inherit">Log in</Button>}</>}
            <Cart total={1} />
         </div>
      </div>
   </header >)
}

export default Header