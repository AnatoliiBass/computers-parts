import { Typography } from "@mui/material"

const Title = ({ size, seo, description }) => {
   return (<Typography variant={size} component={seo}>{description}</Typography>)
}

export default Title