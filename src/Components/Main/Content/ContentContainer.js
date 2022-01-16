
import { connect } from "react-redux"
import Content from "./Content"
import { setActiveCategory, deleteCategory } from '../../../Redux/Reducers/categoryReducer'

let mapStateToProps = (state) => {
   return {
      products: state.products.products,
      categories: state.categories.categories,
      isAuth: state.auth.isAuth
   }
}


const ContentContainer = connect(mapStateToProps, { setActiveCategory, deleteCategory })(Content)

export default ContentContainer