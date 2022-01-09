
import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import { setBrands } from "../../../Redux/Reducers/brandsReducer"
import { setCategories } from "../../../Redux/Reducers/categoryReducer"
import { setProducts } from "../../../Redux/Reducers/productsReducer"
import Sidebar from "./Sidebar"

class SidebarContainer extends React.Component {
   componentDidMount() {
      axios.get("http://localhost:3013/categories").then(responce => { this.props.setCategories(responce.data) })
      axios.get("http://localhost:3013/brands").then(responce => { this.props.setBrands(responce.data) })
      axios.get("http://localhost:3013/products").then(responce => { this.props.setProducts(responce.data) })
   }

   render() {
      return (
         <Sidebar products={this.props.products} brands={this.props.brands} categories={this.props.categories} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      products: state.products.products,
      categories: state.categories.categories,
      brands: state.brands.brands
   }
}



export default connect(mapStateToProps, {setCategories, setProducts, setBrands})(SidebarContainer)

