import { sidebar } from './Sidebar.module.css'
import Title from '../../UI/Title/Title'
import AccordionItems from '../../UI/AccordionItems/AccordionItems'
const info = {
   "Components": ["Sound cards", "Video cards"],
   "Network hardware": ["Modems", "Routers"]
}

const Sidebar = () => {
   return (
      <section className={sidebar}>
         <Title size="h5" seo="h2" description="Computer parts" />
         <AccordionItems infoArray={info} />
         <Title size="h5" seo="h2" description="Filters" />
      </section>
   )
}

export default Sidebar