import { Route, Routes } from 'react-router-dom'
import App from '../../../App'
import Auth from '../../Modals/Auth/Auth'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import { content } from './Content.module.css'
import FilterCards from './FilterCards/FilterCards'
import HomeSection from './HomeSection/HomeSection'
import ProductCards from './ProductCards/ProductCards'
import ProductItem from './ProductItem/ProductItem'
import Sections from './Sections/Sections'
const BASEURL = "/"
const PARTS = "/parts/:id"
const ABOUT = "/about"
const CONTACTS = "/contacts"
const PRODUCTCARDS = "/parts/:id/:subid"
const PRODUCTITEM = "/parts/:id/:subid/:specialid"
const FILTER = "/parts/filter/:obj"
const AUTH = "/auth"
const Content = ({ products, categories }) => {
   const names = categories.map(item => ({ name: item.name, id: item.id }))
   const subnames = categories.map(item => item.items).flat()

   return (
      <section className={content}>
         <Routes>
            <Route path={BASEURL} element={<HomeSection sections={names} btn={true} />} />
            <Route path={PARTS} element={<Sections sections={categories} />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={CONTACTS} element={<Contacts />} />
            <Route path={PRODUCTCARDS} element={<ProductCards arrObjects={products} subnames={subnames} />} />
            <Route path={PRODUCTITEM} element={<ProductItem products={products} />} />
            <Route path={FILTER} element={<FilterCards arrObjects={products} subnames={subnames} />} />
            {/* <Route path={AUTH} element={<App />} /> */}
         </Routes>
      </section >)
}

export default Content