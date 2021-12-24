
import { NavLink } from 'react-router-dom'
import AddCategoriesContainer from '../../../UI/AddCategories/AddCategoriesContainer'
import Title from '../../../UI/Title/Title'
import { sectionBox } from './Sections.module.css'

const Sections = ({ sections, btn, store }) => {
   const getUrl = (element) => {
      let url
      if (element === "Components") {
         url = "/components"
      } else if (element === "Network hardware") {
         url = "/network"
      } else { url = "/productcards" }
      return url
   }
   const elements = sections[1].map((item, index) => (
      <NavLink to={getUrl(item)} key={Date.now() + index}><Title size="h4" seo="h3" description={item} /></NavLink>
   ))
   return (
      <div>
         <Title size="h3" seo="h1" description={sections[0]} />
         <div>{(btn) ? (<AddCategoriesContainer store={store} />) : ""}</div>
         <div className={sectionBox}>
            {elements}
         </div>
      </div>
   )
}

export default Sections