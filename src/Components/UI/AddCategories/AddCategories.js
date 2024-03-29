import { Button, TextField, Typography } from "@mui/material"
import { addcategory } from './AddCategories.module.css'

const AddCategories = ({ addCategory, updateCategory, info }) => {
   const onCategoryChange = (event) => {
      updateCategory(event.target.value.trim())
   }
   const addNewCategory = () => {
      addCategory()
   }
   return (
      <div className={addcategory}>
         <TextField onChange={onCategoryChange} value={info} />
         <Button onClick={addNewCategory} color="inherit"><Typography>Add New Category</Typography></Button>
      </div>
   )
}

export default AddCategories