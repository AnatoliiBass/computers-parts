import { image } from '../Logo/Logo.module.css'
import logoImg from './Assets/logo.png'
const Logo = () => {
   return (<div className={image}>
      <img src={logoImg} alt="Logo" />
   </div>)
}

export default Logo