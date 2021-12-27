import { sidebar } from './Sidebar.module.css'
import Title from '../../UI/Title/Title'
import AccordionItems from '../../UI/AccordionItems/AccordionItems'
import Filter from '../../UI/Filter/Filter'

const Sidebar = ({ products, categories, brands }) => {
   const max = () => {
      const newArr = products.map(item => parseInt(item.price))
      return Math.max(...newArr)
   }
   const min = () => {
      const newArr = products.map(item => parseInt(item.price))
      return Math.min(...newArr)
   }
   return (
      <section className={sidebar}>
         <Title size="h5" seo="h2" description="Computer parts" />
         <AccordionItems infoArray={categories} />
         <Title size="h5" seo="h2" description="Filters" />
         <Filter min={min} max={max} brands={brands} />
      </section>
   )
}

export default Sidebar