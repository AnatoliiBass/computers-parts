
import { NavLink, useParams } from 'react-router-dom'
import AddCategoriesContainer from '../../../UI/AddCategories/AddCategoriesContainer'
import Title from '../../../UI/Title/Title'
import { sectionBox } from './Sections.module.css'

const Sections = ({ sections, btn }) => {
   const { id } = useParams()
   const elements = sections.filter(item => item.id === id)
   const subcategories = elements[0].items.map((item) => (
      <NavLink to={`/parts/${elements[0].id}/${item.id}`} key={item.id}><Title size="h4" seo="h3" description={item.name} /></NavLink>
   ))
   return (
      <div>
         <Title size="h3" seo="h1" description={elements[0].name} />
         <div>{(btn) ? (<AddCategoriesContainer />) : ""}</div>
         <div className={sectionBox}>
            {subcategories}
         </div>
      </div>
   )
}

export default Sections