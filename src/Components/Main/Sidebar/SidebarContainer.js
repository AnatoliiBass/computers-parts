
import { connect } from "react-redux"
import { setBrandsCreator, setCategoriesCreator, setProductsCreator } from "../../../Redux/Reducers/categoryReducer"
import Sidebar from "./Sidebar"



let mapStateToProps = (state) => {
   return {
      products: state.categories.products,
      categories: state.categories.categories,
      brands: state.categories.brands
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setCategories: (data) => { dispatch(setCategoriesCreator(data)) },
      setBrands: (data) => { dispatch(setBrandsCreator(data)) },
      setProducts: (data) => { dispatch(setProductsCreator(data)) }
   }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer