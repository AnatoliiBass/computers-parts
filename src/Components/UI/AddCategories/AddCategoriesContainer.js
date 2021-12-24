import AddCategories from "./AddCategories"
import { addCategoryCreator, updateCategoryCreator } from "../../../Redux/Reducers/categoryReducer"

const AddCategoriesContainer = ({ store }) => {
   const info = store.getState().categories.categories.newinfo
   const addNewCategory = () => {
      store.dispatch(addCategoryCreator())
      onCategoryChange('')
   }

   const onCategoryChange = (text) => {
      store.dispatch(updateCategoryCreator(text))
   }
   return (
      <AddCategories addCategory={addNewCategory} changeCategory={onCategoryChange} info={info} />
   )
}

export default AddCategoriesContainer