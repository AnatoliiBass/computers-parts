
import { connect } from "react-redux"
import Content from "./Content"
import { setActiveCategory } from '../../../Redux/Reducers/categoryReducer'

let mapStateToProps = (state) => {
   return {
      products: state.products.products,
      categories: state.categories.categories
   }
}


const ContentContainer = connect(mapStateToProps, { setActiveCategory })(Content)

export default ContentContainer