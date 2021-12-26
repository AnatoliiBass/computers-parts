import { Pagination, Stack } from "@mui/material"
import style from './PaginationImages.module.css'
import React from "react"

const PaginationImages = ({ images }) => {

   const [page, setPage] = React.useState(1);
   const handleChange = (event, value) => {
      setPage(value)
   }

   return (
      <Stack spacing={2} className={style.box}>
         <img src={images[page - 1].url} alt="Some product" />
         <Pagination count={images.length} page={page} onChange={handleChange} />
      </Stack>)
}

export default PaginationImages