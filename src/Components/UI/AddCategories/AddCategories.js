import { Button } from "@mui/material"
import React from "react"

const newCategory = React.createRef()

const AddCategories = ({ addCategory }) => {
   const addNewCategory = () => {
      if (newCategory.current.value) {
         addCategory(newCategory.current.value)
      }
      newCategory.current.value = ''
   }
   return (
      <div>
         <textarea ref={newCategory} id="standard-basic" label="Standard" variant="standard" />
         <Button onClick={addNewCategory}>Add New Category</Button>
      </div>
   )
}

export default AddCategories