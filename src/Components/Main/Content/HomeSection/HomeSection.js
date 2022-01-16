import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { NavLink } from 'react-router-dom'
import AddCategoriesContainer from '../../../UI/AddCategories/AddCategoriesContainer'
import Title from '../../../UI/Title/Title'
import { sectionBox, sectionItem } from '../Sections/Sections.module.css'

const HomeSection = ({ sections, setActiveCategory, isAuth, deleteCategory }) => {
   const elements = sections.map((item) => (
      <div className={sectionItem} key={item.id}>
         <NavLink to={`/parts/${item.id}`} onClick={() => { setActiveCategory(item.id) }}>
            <Title size="h4" seo="h3" description={item.name} /></NavLink>
         <IconButton aria-label="delete" size="large" onClick={() => { deleteCategory(item.id) }}>
            <DeleteIcon fontSize="inherit" />
         </IconButton>
      </div>
   ))
   return (
      <div>
         <Title size="h3" seo="h1" description="Computer parts" />
         <div>{(isAuth) ? (<AddCategoriesContainer />) : ""}</div>
         <div className={sectionBox}>
            {elements}
         </div>
      </div>
   )
}

export default HomeSection