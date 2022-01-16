import { bg, flex, container } from './Header.module.css'
import ResponsiveAppBar from '../UI/AppBar/ResponsiveAppBar'
import Cart from '../UI/Cart/Cart'
import AuthContainer from '../Auth/AuthContainer'
const Header = () => {
   return (<header className={bg}>
      <div className={container}>
         <div className={flex}>
            <ResponsiveAppBar />
         </div>
         <div className={flex}>
            <AuthContainer />
            <Cart total={1} />
         </div>
      </div>
   </header >)
}

export default Header