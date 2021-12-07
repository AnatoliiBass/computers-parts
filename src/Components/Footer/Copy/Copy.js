import { Typography } from '@mui/material'
import { copy } from './Copy.module.css'

const freshYear = () => {
   let today = new Date()
   let year = today.getFullYear()
   return year
}

const Copy = () => {
   return (
      <div>
         <Typography className={copy}>{freshYear()}&#169;Computers parts <span>owner Anatolii Bas</span></Typography>
      </div>
   )
}

export default Copy