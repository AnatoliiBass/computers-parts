import { Slider, Typography } from "@mui/material"
import { useState } from "react"
import Title from "../Title/Title"

const FilterPrice = ({ min, max, getCurrentMinMax }) => {
   function valuetext(value) {
      return `${value}`
   }
   const [value, setValue] = useState([min, max])
   const handleChange = (event, newValue) => {
      setValue(newValue)
      getCurrentMinMax(newValue)
   }
   return (
      <div>
         <Title size="h6" seo="h5" description="Range prices" />
         <Slider
            defaultValue={[min, max]}
            getAriaLabel={() => 'Price range'}
            value={value[0] && value[1] ? value : [min, max]}
            onChange={handleChange}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={100}
            min={min}
            max={max}
         />
         <Typography>{`From ${value[0] ? value[0] : min}$ to ${value[1] ? value[1] : max}$`}</Typography>
      </div>
   )
}

export default FilterPrice