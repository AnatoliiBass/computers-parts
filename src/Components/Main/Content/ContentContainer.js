
import { connect } from "react-redux"
import Content from "./Content"


let mapStateToProps = (state) => {
   return {
      products: state.categories.products,
      categories: state.categories.categories.categories
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer