import { sidebar } from './Sidebar.module.css'
import Title from '../../UI/Title/Title'
import AccordionItems from '../../UI/AccordionItems/AccordionItems'
import Filter from '../../UI/Filter/Filter'
import React from 'react'
import axios from 'axios'

class Sidebar extends React.Component {
   componentDidMount() {
      axios.get("http://localhost:3013/categories").then(responce => { this.props.setCategories(responce.data) })
      axios.get("http://localhost:3013/brands").then(responce => { this.props.setBrands(responce.data) })
      axios.get("http://localhost:3013/products").then(responce => { this.props.setProducts(responce.data) })
   }
   max = () => {
      return Math.max(...this.props.products.map(item => {
         return Math.ceil(item.price)
      }))
   }
   min = () => {
      return Math.min(...this.props.products.map(item => {
         return Math.floor(item.price)
      }))
   }


   render() {
      return (
         <section className={sidebar}>
            <Title size="h5" seo="h2" description="Computer parts" />
            <AccordionItems infoArray={this.props.categories} />
            <Title size="h5" seo="h2" description="Filters" />
            <Filter min={this.min()} max={this.max()} brands={this.props.brands} />
         </section>
      )
   }
}

export default Sidebar