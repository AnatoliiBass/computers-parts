import { Button } from "@mui/material"
import React from "react"

const AddCategories = ({ addCategory, updateCategory, info }) => {
   const newCategory = React.createRef()

   const addNewCategory = () => {
      if (newCategory.current.value) {
         addCategory(newCategory.current.value)
      }

   }

   const onCategoryChange = () => {
      updateCategory(newCategory.current.value)
   }
   return (
      <div>
         <textarea onChange={onCategoryChange} ref={newCategory} value={info} />
         <Button onClick={addNewCategory}>Add New Category</Button>
      </div>
   )
}

export default AddCategories