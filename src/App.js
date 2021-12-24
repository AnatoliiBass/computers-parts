
import app from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
const App = ({ store, min, max }) => {
  return (
    <div className={app.wrapper}>
      <div>
        <Header />
        <Main store={store} min={min} max={max} />
      </div>
      <Footer />
    </div>
  )
}

export default App
