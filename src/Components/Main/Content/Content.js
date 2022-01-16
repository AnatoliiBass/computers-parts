import { Route, Routes } from 'react-router-dom'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import { content } from './Content.module.css'
import FilterCards from './FilterCards/FilterCards'
import HomeSection from './HomeSection/HomeSection'
import ProductItem from './ProductItem/ProductItem'
import Sections from './Sections/Sections'
import UsersListContainer from '../../UsersList/UsersListContainer'
import ProductCardsContainer from './ProductCards/ProductCardsContainer'
const BASEURL = "/"
const PARTS = "/parts/:id"
const ABOUT = "/about"
const CONTACTS = "/contacts"
const USERS = "/users"
const PRODUCTCARDS = "/parts/:id/:subid"
const PRODUCTITEM = "/parts/:id/:subid/:specialid"
const FILTER = "/parts/filter/:obj"
const Content = ({ products, categories, setActiveCategory, deleteCategory, isAuth }) => {
   const names = categories.map(item => ({ name: item.name, id: item.id }))
   const subnames = categories.map(item => item.items).flat()

   return (
      <section className={content}>
         <Routes>
            <Route path={BASEURL} element={<HomeSection sections={names} deleteCategory={deleteCategory}
               setActiveCategory={setActiveCategory} isAuth={isAuth} />} />
            <Route path={PARTS} element={<Sections sections={categories} deleteCategory={deleteCategory}
               setActiveCategory={setActiveCategory} isAuth={isAuth} />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={CONTACTS} element={<Contacts />} />
            <Route path={USERS} element={<UsersListContainer />} />
            <Route path={PRODUCTCARDS} element={<ProductCardsContainer />} />
            <Route path={PRODUCTITEM} element={<ProductItem products={products} />} />
            <Route path={FILTER} element={<FilterCards arrObjects={products} subnames={subnames} />} />
         </Routes>
      </section >)
}

export default Content