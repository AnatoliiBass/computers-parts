import React from 'react'
import { connect } from "react-redux"
import { getProductsPartsThunk, getProductsActiveThunk } from "../../../../Redux/Reducers/productsReducer"
import ProductCards from './ProductCards'


class ProductCardsContainer extends React.Component {

   componentDidMount() {
      this.props.getProductsActiveThunk(this.props.activeCategory)
      this.props.getProductsPartsThunk(this.props.activeCategory, this.props.currentPage, this.props.sizePage)
   }

   helperFunc = (event) => {
      const current = +event.target.textContent
      this.props.getProductsPartsThunk(this.props.activeCategory, current, this.props.sizePage)
   }

   render() {
      return (
         <ProductCards helperFunc={this.helperFunc} totalProducts={this.props.totalProducts} sizePage={this.props.sizePage}
            currentPage={this.props.currentPage} products={this.props.products} isFetching={this.props.isFetching} subnames={this.props.subnames} />)
   }
}

let mapStateToProps = (state) => {
   return {
      products: state.products.products,
      sizePage: state.products.sizePage,
      totalProducts: state.products.totalProducts,
      currentPage: state.products.currentPage,
      isFetching: state.products.isFetching,
      subnames: state.categories.categories.map(item => item.items).flat(),
      activeCategory: state.categories.activeCategory
   }
}


export default connect(mapStateToProps, { getProductsActiveThunk, getProductsPartsThunk })(ProductCardsContainer)
