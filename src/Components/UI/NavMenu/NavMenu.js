import menu from './NavMenu.module.css'
import { MenuItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
const NavMenu = () => {
   return (
      <nav className={menu.flex}>
         <NavLink to="/"><MenuItem>Home</MenuItem></NavLink>
         <NavLink to="/about"><MenuItem>About</MenuItem></NavLink>
         <NavLink to="/contacts"><MenuItem>Contacts</MenuItem></NavLink>
      </nav>
   )
}

export default NavMenu