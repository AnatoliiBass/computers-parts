import React from 'react'
import { connect } from "react-redux"
import { apiGetProductsActive, apiGetProductsParts } from '../../../../API/api'
import { setCurrentPage, setTotalProducts, setProducts, togleIsFetching } from "../../../../Redux/Reducers/productsReducer"
import ProductCards from './ProductCards'


class ProductCardsContainer extends React.Component {

   componentDidMount() {

      this.props.togleIsFetching(true)
      apiGetProductsActive(this.props.activeCategory)
         .then(data => {
            console.log(data);
            this.props.setTotalProducts(data.length)
         })
      apiGetProductsParts(this.props.activeCategory, this.props.currentPage, this.props.sizePage)
         .then(data => {
            this.props.setProducts(data)
         }).then(() => { setTimeout(() => { this.props.togleIsFetching(false) }, 2000) })
   }

   helperFunc = (event) => {
      this.props.togleIsFetching(true)
      this.props.setCurrentPage(+event.target.textContent)
      apiGetProductsParts(this.props.activeCategory, +event.target.textContent, this.props.sizePage)
         .then(data => {
            this.props.setProducts(data)
         }).then(() => { setTimeout(() => { this.props.togleIsFetching(false) }, 2000) })

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


export default connect(mapStateToProps, { setProducts, setCurrentPage, setTotalProducts, togleIsFetching })(ProductCardsContainer)
