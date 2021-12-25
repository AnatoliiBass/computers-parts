import { sidebar, filter, button } from './Sidebar.module.css'
import Title from '../../UI/Title/Title'
import AccordionItems from '../../UI/AccordionItems/AccordionItems'
import FilterPrice from '../../UI/FilterPrice/FilterPrice'
import SelectItem from '../../UI/Select/SelectItem'
import { Button } from '@mui/material'

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
         <div className={filter}>
            <FilterPrice min={min()} max={max()} />
            <SelectItem arrBrands={brands} />
            <div className={button}>
               <Button variant="outlined" color="inherit">Search</Button>
            </div>
         </div>
      </section>
   )
}

export default Sidebar