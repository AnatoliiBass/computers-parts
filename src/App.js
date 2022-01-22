import style from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
const App = ()=> {

    return (
      <div className={style.wrapper}>
        <div>
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    )
}

export default App
