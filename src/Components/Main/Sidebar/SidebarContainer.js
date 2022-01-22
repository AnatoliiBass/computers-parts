import React from "react"
import { connect } from "react-redux"
import { fillStateThunk } from "../../../Redux/Reducers/productsReducer"
import Sidebar from "./Sidebar"
import { db } from "../../../firebase"
import { onValue, ref, remove, set, update } from "firebase/database"

class SidebarContainer extends React.Component {
   componentDidMount() {
      this.props.fillStateThunk()
      // setTimeout(() => {
      //    set(ref(db, '/categories/1'), { id: 6765, name: 'jhgghh', items: [] }).then(responce => console.log(responce))
      // }, 10000)
      // setTimeout(() => {
      //    remove(ref(db, '/categories/0/items/0'))
      // }, 10000)
      // setTimeout(() => {
      //    update(ref(db, '/categories/1'), { id: 1313, name: 'ttttt', items: [{ name: 88888, id: 1111 }, { name: 99999, id: 777 }] }).then(responce => console.log(responce))
      // }, 10000)
      // setTimeout(() => {
      //    onValue(ref(db), data => { console.log(data.val()) })
      // }, 10000)

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



export default connect(mapStateToProps, { fillStateThunk })(SidebarContainer)

