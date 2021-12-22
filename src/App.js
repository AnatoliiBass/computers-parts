
import app from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
const App = ({ state, dispatch, min, max }) => {
  return (
    <div className={app.wrapper}>
      <div>
        <Header />
        <Main state={state} dispatch={dispatch} min={min} max={max} />
      </div>
      <Footer />
    </div>
  )
}

export default App
