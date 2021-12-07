
import app from './App.module.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
const App = () => {
  return (
    <div className={app.wrapper}>
      <div>
        <div><Header /></div>
        <div><Main /></div>
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default App;
