import { container, flex } from './Footer.module.css'
import Logo from '../UI/Logo/Logo'
import NavMenu from '../UI/NavMenu/NavMenu'
const Footer = () => {
   return (<footer className={flex}>
      <div className={container}>
         <Logo />
         <NavMenu />
      </div>
   </footer>)
}

export default Footer