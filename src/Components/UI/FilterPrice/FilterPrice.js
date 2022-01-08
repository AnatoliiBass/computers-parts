import { Slider, Typography } from "@mui/material"
import React from "react"
import Title from "../Title/Title"

const FilterPrice = ({ min, max, getCurrentMinMax }) => {
   function valuetext(value) {
      return `${value}`
   }
   const [value, setValue] = React.useState([min, max])
   const handleChange = (event, newValue) => {
      setValue(newValue)
      getCurrentMinMax(newValue)
   }
   // const arrvalue = valuetext(value).split(',')
   return (
      <div>
         <Title size="h6" seo="h5" description="Range prices" />
         <Slider
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={100}
            min={min}
            max={max}
         />
         <Typography>{`From ${value[0] === Infinity ? min : value[0]}$ to ${value[1] === -Infinity ? max : value[1]}$`}</Typography>
      </div>
   )
}

export default FilterPrice