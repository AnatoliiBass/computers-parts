import AddCategories from "./AddCategories"
import { addCategoryCreator, updateCategoryCreator } from "../../../Redux/Reducers/categoryReducer"
import { connect } from "react-redux"


let mapStateToProps = (state) => {
   return {
      info: state.categories.categories.newinfo
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addCategory: () => {
         dispatch(addCategoryCreator())
      },
      changeCategory: (text) => {
         dispatch(updateCategoryCreator(text))
      }
   }
}

const AddCategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(AddCategories)

export default AddCategoriesContainer