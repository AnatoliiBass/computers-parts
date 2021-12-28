
import app from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import FormAuth from './Components/UI/FormAuth/FormAuth'
import { useState } from 'react'
import Auth from './Components/Modals/Auth/Auth'
Amplify.configure(awsconfig)
const App = () => {
  const [logout, setLogout] = useState(false)
  const getLogout = (newLogout) => {
    setLogout(newLogout)
  }
  return (
    <div className={app.wrapper}>
      {logout ? <Auth /> : <></>}
      <div>
        <Header getLogout={getLogout} />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default withAuthenticator(App)
