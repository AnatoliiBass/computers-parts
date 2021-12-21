
import { Route, Routes } from 'react-router-dom'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import { content } from './Content.module.css'
import ProductCards from './ProductCards/ProductCards'
import ProductItem from './ProductItem/ProductItem'
import Sections from './Sections/Sections'
const BASEURL = "/"
const COMPONENTS = "/components"
const NETWORK = "/network"
const ABOUT = "/about"
const CONTACTS = "/contacts"
const PRODUCTCARDS = "/productcards"
const PRODUCTITEM = "/productcards/productitem"
const Content = ({ state, addCategory }) => {
   const categories = [...state.categories]
   return (
      <section className={content}>
         <Routes>
            <Route path={BASEURL} element={<Sections sections={["Computer parts", categories.map(item => item.name)]} btn={true} addCategory={addCategory} />} />
            <Route path={COMPONENTS} element={<Sections sections={["Components", ["Sound cards", "Video cards"]]} />} />
            <Route path={NETWORK} element={<Sections sections={["Network hardware", ["Modems", "Routers"]]} />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={CONTACTS} element={<Contacts />} />
            <Route path={PRODUCTCARDS} element={<ProductCards arrObjects={state.products} />} />
            <Route path={PRODUCTITEM} element={<ProductItem name="Asus NVidia SX 2345 LD" />} />
         </Routes>
      </section >)
}

export default Content