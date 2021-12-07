import { bg, flex, container, cursor } from './Header.module.css'
import Logo from '../UI/Logo/Logo'
import NavMenu from '../UI/NavMenu/NavMenu'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
   return (<header className={bg}>
      <div className={container}>
         <div className={flex}>
            <Logo />
            <NavMenu />
         </div>
         <div className={flex}>
            <Button color="inherit">Log in</Button>
            <Button color="inherit" disabled>Log out</Button>
            <ShoppingCartIcon className={cursor} />
         </div>
      </div>
   </header>)
}

export default Header