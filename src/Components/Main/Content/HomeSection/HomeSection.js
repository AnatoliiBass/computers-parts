
import { NavLink } from 'react-router-dom'
import AddCategoriesContainer from '../../../UI/AddCategories/AddCategoriesContainer'
import Title from '../../../UI/Title/Title'
import { sectionBox } from '../Sections/Sections.module.css'

const HomeSection = ({ sections, setActiveCategory, btn }) => {
   const elements = sections.map((item) => (
      <NavLink to={`/parts/${item.id}`} key={item.id} onClick={() => { setActiveCategory(item.id) }}>
         <Title size="h4" seo="h3" description={item.name} /></NavLink>
   ))
   return (
      <div>
         <Title size="h3" seo="h1" description="Computer parts" />
         <div>{(btn) ? (<AddCategoriesContainer />) : ""}</div>
         <div className={sectionBox}>
            {elements}
         </div>
      </div>
   )
}

export default HomeSection