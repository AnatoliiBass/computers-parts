import { container, bg, flex, flexplus, cursor, footerNav } from './Footer.module.css'
import Logo from '../UI/Logo/Logo'
import NavMenu from '../UI/NavMenu/NavMenu'
import Copy from './Copy/Copy'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
const Footer = () => {
   return (<footer className={bg}>
      <div className={container}>
         <div className={flex}>
            <Logo />
            <Copy />
         </div>
         <div className={flexplus}>
            <nav className={footerNav}><NavMenu /></nav>
            <div className={flexplus}>
               <FacebookIcon className={cursor} />
               <InstagramIcon className={cursor} />
               <YouTubeIcon className={cursor} />
            </div>
         </div>
      </div>
   </footer >)
}

export default Footer