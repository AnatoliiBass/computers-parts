
import app from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import axios from 'axios'
const App = () => {

  const res = axios.get('http://localhost:3013/categories').then()
  console.log(res)


  return (
    <div className={app.wrapper}>
      <div>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App
