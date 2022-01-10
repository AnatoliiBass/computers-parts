import menu from './NavMenu.module.css'
import { MenuItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
const NavMenu = () => {
   return (
      <nav className={menu.flex}>
         <NavLink to="/" className={menu.link}><MenuItem>Home</MenuItem></NavLink>
         <NavLink to="/about" className={menu.link}><MenuItem>About</MenuItem></NavLink>
         <NavLink to="/contacts" className={menu.link}><MenuItem>Contacts</MenuItem></NavLink>
         <NavLink to="/users" className={menu.link}><MenuItem>Users</MenuItem></NavLink>
      </nav>
   )
}

export default NavMenu