import { container, bg, flex, flexplus, footerNav } from './Footer.module.css'
import Logo from '../UI/Logo/Logo'
import NavMenu from '../UI/NavMenu/NavMenu'
import Copy from './Copy/Copy'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { NavLink } from 'react-router-dom'
const Footer = () => {
   return (<footer className={bg}>
      <div className={container}>
         <div className={flex}>
            <NavLink to="/"><Logo /></NavLink>
            <Copy />
         </div>
         <div className={flexplus}>
            <nav className={footerNav}><NavMenu /></nav>
            <div className={flexplus}>
               <a href="https://facebook.com"><FacebookIcon /></a>
               <a href="https://instagram.com"><InstagramIcon /></a>
               <a href="https://youtube.com"><YouTubeIcon /></a>
            </div>
         </div>
      </div>
   </footer >)
}

export default Footer