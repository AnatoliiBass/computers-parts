import { flex, container } from './Header.module.css'
import Logo from '../UI/Logo/Logo'
import NavMenu from '../UI/NavMenu/NavMenu'
const Header = () => {
   return (<header className={flex}>
      <div className={container}>
         <Logo />
         <NavMenu />
      </div>
   </header>)
}

export default Header