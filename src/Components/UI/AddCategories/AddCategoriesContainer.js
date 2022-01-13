import AddCategories from "./AddCategories"
import { addCategory, updateCategory } from "../../../Redux/Reducers/categoryReducer"
import { connect } from "react-redux"


let mapStateToProps = (state) => {
   return {
      info: state.categories.newinfo
   }
}


const AddCategoriesContainer = connect(mapStateToProps, { addCategory, updateCategory })(AddCategories)

export default AddCategoriesContainer