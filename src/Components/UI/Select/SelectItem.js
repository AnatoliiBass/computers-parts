import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Title from "../Title/Title"
import { useState } from "react"

const SelectItem = ({ arrBrands, getBrand }) => {
   const [brand, setBrand] = useState('All')

   const handleChange = (event) => {
      setBrand(event.target.value)
      getBrand(event.target.value)
   };

   return (
      <div>
         <Title size="h6" seo="h5" description="Select brand" />
         <FormControl fullWidth>
            <InputLabel id="select-label">Brands</InputLabel>
            <Select
               labelId="select-label"
               id="simple-select"
               defaultValue="All"
               value={brand}
               label="Brands"
               onChange={handleChange}
            >
               {arrBrands.map((item, index) => (
                  <MenuItem value={item} key={Math.floor(Math.random() * 300 + index)}>{item}</MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   )
}

export default SelectItem