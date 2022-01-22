import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { NavLink, useParams } from 'react-router-dom'
import AddCategoriesContainer from '../../../UI/AddCategories/AddCategoriesContainer'
import Title from '../../../UI/Title/Title'
import { sectionBox, sectionItem } from './Sections.module.css'

const Sections = ({ sections, isAuth, setActiveCategory, deleteCategory }) => {
   const { id } = useParams()
   const elements = sections.filter(item => item.id === id)
   const subcategories = elements[0].items.map((item, index) => (
      <div className={sectionItem} key={item.id}>
         <NavLink to={`/parts/${elements[0].id}/${item.id}`} onClick={() => { setActiveCategory(item.id) }}>
            <Title size="h4" seo="h3" description={item.name} /></NavLink>
         {isAuth ? <IconButton aria-label="delete" size="large" onClick={() => { deleteCategory(item.id, item.parent_id) }}>
            <DeleteIcon fontSize="inherit" />
         </IconButton> : <></>}
      </div>
   ))
   return (
      <div>
         <Title size="h3" seo="h1" description={elements[0].name} />
         <div>{(isAuth) ? (<AddCategoriesContainer />) : ""}</div>
         <div className={sectionBox}>
            {subcategories}
         </div>
      </div>
   )
}

export default Sections