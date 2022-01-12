import React from "react"
import { connect } from "react-redux"
import { fillStateThunk } from "../../../Redux/Reducers/productsReducer"
import Sidebar from "./Sidebar"

class SidebarContainer extends React.Component {
   componentDidMount() {
      this.props.fillStateThunk()
   }

   render() {
      return (
         <Sidebar products={this.props.products} brands={this.props.brands} categories={this.props.categories}
            min={this.props.min} max={this.props.max} />
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



export default connect(mapStateToProps, {fillStateThunk})(SidebarContainer)

