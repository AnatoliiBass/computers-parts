import { Slider, Typography } from "@mui/material"
import React from "react";
import Title from "../Title/Title"
function valuetext(value) {
   return `${value}`;
}

const FilterPrice = ({ min, max }) => {
   const [value, setValue] = React.useState([parseInt(min), parseInt(max)])
   const handleChange = (event, newValue) => {
      setValue(newValue)
   }
   const arrvalue = valuetext(value).split(',')
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
            min={parseInt(min)}
            max={parseInt(max)}
         />
         <Typography>From {arrvalue[0]} to {arrvalue[1]} $</Typography>
      </div>
   )
}

export default FilterPrice