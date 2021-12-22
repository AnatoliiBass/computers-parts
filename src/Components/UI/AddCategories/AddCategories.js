import { Button } from "@mui/material"
import React from "react"

const AddCategories = ({ dispatch, info }) => {
   const newCategory = React.createRef()

   const addNewCategory = () => {
      if (newCategory.current.value) {
         dispatch({ type: 'ADD-CATEGORY' })
      }

   }

   const onCategoryChange = () => {
      dispatch({ type: 'UPDATE-CATEGORY', valueName: newCategory.current.value })
   }
   return (
      <div>
         <textarea onChange={onCategoryChange} ref={newCategory} value={info} />
         <Button onClick={addNewCategory}>Add New Category</Button>
      </div>
   )
}

export default AddCategories