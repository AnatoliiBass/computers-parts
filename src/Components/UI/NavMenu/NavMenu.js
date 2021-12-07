import menu from './NavMenu.module.css'
import { MenuItem } from '@mui/material'
const NavMenu = () => {
   return (
      <nav className={menu.flex}>
         <MenuItem>Home</MenuItem>
         <MenuItem>About</MenuItem>
         <MenuItem>Contacts</MenuItem>
      </nav>
   )
}

export default NavMenu