import { sidebar } from './Sidebar.module.css'
import Title from '../../UI/Title/Title'
import AccordionItems from '../../UI/AccordionItems/AccordionItems'
import Filter from '../../UI/Filter/Filter'

const Sidebar = (props) => {
   const max = () => {
      return Math.max(...props.products.map(item => {
         return Math.ceil(item.price)
      }))
   }
   const min = () => {
      return Math.min(...props.products.map(item => {
         return Math.floor(item.price)
      }))
   }



   return (
      <section className={sidebar}>
         <Title size="h5" seo="h2" description="Computer parts" />
         <AccordionItems infoArray={props.categories} />
         <Title size="h5" seo="h2" description="Filters" />
         <Filter min={min()} max={max()} brands={props.brands} />
      </section>
   )
}

export default Sidebar