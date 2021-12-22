
import app from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
const App = ({ state, dispatch }) => {
  return (
    <div className={app.wrapper}>
      <div>
        <Header />
        <Main state={state} dispatch={dispatch} />
      </div>
      <Footer />
    </div>
  )
}

export default App
