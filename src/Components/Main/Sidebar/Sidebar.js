import { sidebar, filter, button } from './Sidebar.module.css'
import Title from '../../UI/Title/Title'
import AccordionItems from '../../UI/AccordionItems/AccordionItems'
import FilterPrice from '../../UI/FilterPrice/FilterPrice'
import SelectItem from '../../UI/Select/SelectItem'
import { Button } from '@mui/material'

const Sidebar = ({ state, min, max }) => {
   return (
      <section className={sidebar}>
         <Title size="h5" seo="h2" description="Computer parts" />
         <AccordionItems infoArray={state.categories.categories} />
         <Title size="h5" seo="h2" description="Filters" />
         <div className={filter}>
            <FilterPrice min={min()} max={max()} />
            <SelectItem arrBrands={state.categories.brands} />
            <div className={button}>
               <Button variant="outlined" color="inherit">Search</Button>
            </div>
         </div>
      </section>
   )
}

export default Sidebar