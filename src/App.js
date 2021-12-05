
import app from './App.module.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
const App = () => {
  return (
    <div className={app.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
