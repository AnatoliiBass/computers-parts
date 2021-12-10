import { bg, flex, container, button} from './Header.module.css'
import Logo from '../UI/Logo/Logo'
import NavMenu from '../UI/NavMenu/NavMenu'
import { Button } from '@mui/material'
import Session from '../UI/Session/Session'
import Cart from '../UI/Cart/Cart'
import { NavLink } from 'react-router-dom'
const Header = () => {
   return (<header className={bg}>
      <div className={container}>
         <div className={flex}>
            <NavLink to="/"><Logo /></NavLink>
            <NavMenu />
         </div>
         <div className={flex}>
            <Session user="Guest" />
            {/* <Session user="UserName" />
            <Session user="Admin" /> */}
            <Button className={button} color="inherit">Log in</Button>
            <Button className={button} color="inherit" disabled>Log out</Button>
            <Cart total={1} />
         </div>
      </div>
   </header>)
}

export default Header