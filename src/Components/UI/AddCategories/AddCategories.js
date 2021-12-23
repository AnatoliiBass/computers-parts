import { Button, TextField, Typography } from "@mui/material"
import { addCategoryCreator, updateCategoryCreator } from "../../../Redux/Reducers/categoryReducer"
import { addcategory } from './AddCategories.module.css'

const AddCategories = ({ dispatch, info }) => {

   const addNewCategory = () => {
      dispatch(addCategoryCreator())
   }

   const onCategoryChange = (event) => {
      if (event.target.value.trim()) {
         dispatch(updateCategoryCreator(event.target.value))
      }
   }
   return (
      <div className={addcategory}>
         <TextField onChange={onCategoryChange} value={info} />
         <Button onClick={addNewCategory} color="inherit"><Typography>Add New Category</Typography></Button>
      </div>
   )
}

export default AddCategories