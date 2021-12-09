import { sidebar } from './Sidebar.module.css'
import Title from '../../UI/Title/Title'
import AccordionItems from '../../UI/AccordionItems/AccordionItems'
import FilterPrice from '../../UI/FilterPrice/FilterPrice'
import SelectItem from '../../UI/Select/SelectItem'
const info = {
   "Components": ["Sound cards", "Video cards"],
   "Network hardware": ["Modems", "Routers"]
}
const arr = ["Asus", "LG", "Panasonic", "Intel", "NVidia"]

const Sidebar = () => {
   return (
      <section className={sidebar}>
         <Title size="h5" seo="h2" description="Computer parts" />
         <AccordionItems infoArray={info} />
         <Title size="h5" seo="h2" description="Filters" />
         <FilterPrice min="1000" max="10000" />
         <SelectItem arrBrands={arr} />
      </section>
   )
}

export default Sidebar