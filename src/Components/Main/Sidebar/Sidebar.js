import { sidebar } from './Sidebar.module.css'
import Title from '../../UI/Title/Title'
import AccordionItems from '../../UI/AccordionItems/AccordionItems'
import Filter from '../../UI/Filter/Filter'

const Sidebar = (props) => {
   return (
      <section className={sidebar}>
         <Title size="h5" seo="h2" description="Computer parts" />
         <AccordionItems infoArray={props.categories} />
         <Title size="h5" seo="h2" description="Filters" />
         <Filter min={props.min} max={props.max} brands={props.brands} />
      </section>
   )
}

export default Sidebar