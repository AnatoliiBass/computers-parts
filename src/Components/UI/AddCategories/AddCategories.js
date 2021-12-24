import { Button, TextField, Typography } from "@mui/material"
import { addcategory } from './AddCategories.module.css'

const AddCategories = ({ addCategory, changeCategory, info }) => {
   const onCategoryChange = (event) => {
      changeCategory(event.target.value.trim())
      console.log(event.target.value);
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