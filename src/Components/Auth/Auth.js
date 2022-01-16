import { flex, button } from './Auth.module.css'
import { Button } from '@mui/material'
import Session from '../UI/Session/Session'
import { useState } from 'react'
import { Amplify } from 'aws-amplify'
import awsExports from '../../aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const Auth = (props) => {
   Amplify.configure(awsExports)
   const [clickLogin, setClickLogin] = useState(false)
   const helperAfterAuth = () => {
      props.setActiveUser()
   }
   const helperSetUser = () => {
      props.clearActiveUser()
      setClickLogin(false)
   }
   const helperOpenAuth = () => {
      setClickLogin(true)
   }
   return (
      <div className={flex}>
         <Session user={props.isAuth ? props.name : 'Guest'} />
         {clickLogin ? <Authenticator style={{ position: "absolute", zIndex: 50 }} variation='modal' >{() => (
            <>
               <Button onClick={helperSetUser} className={button} color="inherit">Log out</Button>
               {helperAfterAuth()}
            </>
         )}</Authenticator> : <>{props.isAuth ? <Button onClick={helperSetUser} className={button} color="inherit">Log out</Button> :
            <Button onClick={helperOpenAuth} className={button} color="inherit">Log in</Button>}</>}
      </div>)
}

export default Auth