import { bg, flex, container } from './Header.module.css'
import ResponsiveAppBar from '../UI/AppBar/ResponsiveAppBar'
import Auth from '../Auth/Auth'
import Cart from '../UI/Cart/Cart'
const Header = () => {
   return (<header className={bg}>
      <div className={container}>
         <div className={flex}>
            <ResponsiveAppBar />
         </div>
         <div className={flex}>
            <Auth />
            <Cart total={1} />
         </div>
      </div>
   </header >)
}

export default Header