
import app from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
const App = ({ state, addCategory, updateCategory }) => {
  return (
    <div className={app.wrapper}>
      <div>
        <Header />
        <Main state={state} addCategory={addCategory} updateCategory={updateCategory} />
      </div>
      <Footer />
    </div>
  )
}

export default App
