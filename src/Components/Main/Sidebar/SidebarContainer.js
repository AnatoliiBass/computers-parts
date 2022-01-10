import React from "react"
import { connect } from "react-redux"
import { apiGetBrands, apiGetCategories, apiGetProducts } from "../../../API/api"
import { setBrands } from "../../../Redux/Reducers/brandsReducer"
import { setCategories } from "../../../Redux/Reducers/categoryReducer"
import { setProducts, setMinMax } from "../../../Redux/Reducers/productsReducer"
import Sidebar from "./Sidebar"

class SidebarContainer extends React.Component {
   componentDidMount() {
      apiGetCategories().then(data => { this.props.setCategories(data) })
      apiGetBrands().then(data => { this.props.setBrands(data) })
      apiGetProducts().then(data => {
         this.props.setProducts(data)
         this.props.setMinMax([Math.min(...data.map(item => Math.floor(+item.price))),
         Math.max(...data.map(item => Math.ceil(+item.price)))])
      })
   }

   render() {
      return (
         <Sidebar products={this.props.products} brands={this.props.brands} categories={this.props.categories} min={this.props.min}
            max={this.props.max} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      products: state.products.products,
      categories: state.categories.categories,
      brands: state.brands.brands,
      min: state.products.minPrice,
      max: state.products.maxPrice
   }
}



export default connect(mapStateToProps, { setCategories, setProducts, setBrands, setMinMax })(SidebarContainer)

