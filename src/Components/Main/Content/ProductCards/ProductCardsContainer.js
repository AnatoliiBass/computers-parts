
import axios from 'axios'
import React from 'react'
import { connect } from "react-redux"
import { setCurrentPage, setTotalProducts, setProducts, togleIsFetching } from "../../../../Redux/Reducers/productsReducer"
import ProductCards from './ProductCards'


class ProductCardsContainer extends React.Component {

   componentDidMount() {

      this.props.togleIsFetching(true)
      axios.get('http://localhost:3013/products?category_id=' + this.props.activeCategory)
         .then(responce => {
            this.props.setTotalProducts(responce.data.length)
         })
      axios.get(`http://localhost:3013/products?category_id=${this.props.activeCategory}&_page=${this.props.currentPage}&_limit=${this.props.sizePage}`)
         .then(responce => {
            this.props.setProducts(responce.data)
         }).then(() => { setTimeout(() => { this.props.togleIsFetching(false) }, 2000) })
   }

   helperFunc = (event) => {
      this.props.togleIsFetching(true)
      this.props.setCurrentPage(+event.target.textContent)
      axios.get(`http://localhost:3013/products?category_id=${this.props.activeCategory}&_page=${+event.target.textContent}&_limit=${this.props.sizePage}`)
         .then(responce => {
            this.props.setProducts(responce.data)
         }).then(() => { setTimeout(() => { this.props.togleIsFetching(false) }, 2000) })

   }

   render() {

      return (
         <ProductCards helperFunc={this.helperFunc} totalProducts={this.props.totalProducts} sizePage={this.props.sizePage}
            currentPage={this.props.currentPage} products={this.props.products} isFetching={this.props.isFetching} subnames={this.props.subnames} />)
   }
}

let mapStateToProps = (state) => {
   console.log(state);
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
