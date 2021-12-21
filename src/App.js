
import app from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
const App = ({ state, addCategory }) => {
  return (
    <div className={app.wrapper}>
      <div>
        <Header />
        <Main state={state} addCategory={addCategory} />
      </div>
      <Footer />
    </div>
  )
}

export default App
