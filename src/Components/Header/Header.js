import { bg, flex, container } from './Header.module.css'
import ResponsiveAppBar from '../UI/AppBar/ResponsiveAppBar'
import Auth from '../Auth/Auth'
const Header = () => {
   return (<header className={bg}>
      <div className={container}>
         <div className={flex}>
            <ResponsiveAppBar />
         </div>
         <Auth />
      </div>
   </header >)
}

export default Header