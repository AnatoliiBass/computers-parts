import { flex, button } from './Auth.module.css'
import { Button } from '@mui/material'
import Session from '../UI/Session/Session'
import { useState } from 'react'
import { Amplify } from 'aws-amplify'
import awsExports from '../../aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(awsExports)


const Auth = () => {
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
   return (
      <div className={flex}>
         <Session user={user ? user : 'Guest'} />

         {clickLogin ? <Authenticator style={{ position: "absolute", zIndex: 50 }} variation='modal' >{() => (
            <>
               <Button onClick={helperSetUser} className={button} color="inherit">Log out</Button>
               {helperAfterAuth()}
            </>
         )}</Authenticator> : <>{user ? <Button onClick={helperSetUser} className={button} color="inherit">Log out</Button> :
            <Button onClick={helperOpenAuth} className={button} color="inherit">Log in</Button>}</>}
      </div>)
}

export default Auth