import { Button } from "@mui/material"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import FilterPrice from "../FilterPrice/FilterPrice"
import SelectItem from "../Select/SelectItem"
import { filter, button, link } from "./Filter.module.css"

const Filter = ({ min, max, brands }) => {
   const newBrands = ['All', ...brands]
   const [value, setValue] = useState([min, max])
   const [brand, setBrand] = useState('All')

   const getCurrentMinMax = (minmax) => {
      setValue(minmax)
   }
   const getBrand = (currentBrand) => {
      setBrand(currentBrand)
   }

   return (
      <div className={filter}>
         <FilterPrice min={min} max={max} getCurrentMinMax={getCurrentMinMax} />
         <SelectItem arrBrands={newBrands} getBrand={getBrand} />
         <div className={button}>
            <NavLink className={link} to={`/parts/filter/${brand}&${value[0] === Infinity ? min : value[0]}&${value[1] === -Infinity ? max : value[1]}`}>
               <Button variant="outlined" color="inherit">Search</Button></NavLink>
         </div>
      </div >
   )
}

export default Filter