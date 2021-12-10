
import { NavLink } from 'react-router-dom'
import Title from '../../../UI/Title/Title'
import { sectionBox } from './Sections.module.css'

const Sections = ({ sections }) => {
   const getUrl = (element) => {
      let url
      if (element === "Components") {
         url = "/components"
      } else if (element === "Network hardware") {
         url = "/network"
      } else { url = "/productcards" }
      return url
   }
   return (
      <div>
         <Title size="h3" seo="h1" description={sections[0]} />
         <div className={sectionBox}>
            {sections[1].split(',').map((item, index) => (
               <NavLink to={getUrl(item)} key={Math.floor(Math.random() * 10 + index)}><Title size="h4" seo="h3" description={item} /></NavLink>
            ))}
         </div>
      </div>
   )
}

export default Sections