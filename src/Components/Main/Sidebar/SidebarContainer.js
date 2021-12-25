
import { connect } from "react-redux"
import Sidebar from "./Sidebar"



let mapStateToProps = (state) => {
   console.log(state);
   return {
      products: state.categories.products,
      categories: state.categories.categories.categories,
      brands: state.categories.brands
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
   }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer