
import app from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Data from './Data/Data'
const App = () => {
  return (
    <div className={app.wrapper}>
      <Data />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
