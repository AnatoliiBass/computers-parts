import { Button, Card, CardActions, CardContent, Pagination, Skeleton, Stack, Typography } from "@mui/material"
import style from "./ProductCards.module.css"
import Title from "../../../UI/Title/Title"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink, useParams } from "react-router-dom"
const ProductCards = (props) => {
   const { id, subid } = useParams()
   const name = props.subnames.filter(item => item.id === subid)[0].name
   const countPages = Math.ceil(props.totalProducts / props.sizePage)
   return (
      <section>
         <Title size="h3" seo="h2" description={name} />
         <Stack spacing={2}>
            <Pagination count={countPages} page={props.currentPage} onChange={props.helperFunc} />
         </Stack>
         <div className={style.flex}>
            {props.products.map((item, index) => (props.isFetching ?
               <Card sx={{ maxWidth: 200 }} key={Date.now() + index} className={style.box}>
                  <Skeleton variant="rectangular" width={210} height={400} animation="wave" /></Card> :
               <Card sx={{ maxWidth: 200 }} key={item.sku + index} className={style.box}>
                  <CardContent>
                     <Typography variant="h5" component="h5">
                        {item.name}
                     </Typography>
                     <div className={style.image}>
                        <img src={item.images[0].url} alt="Some product" />
                     </div>
                  </CardContent>
                  <CardActions className={style.bottom}>
                     <div><Typography>{`Price: ${item.price} $`}</Typography></div>
                     <div className={style.buttons}>
                        <NavLink to={`/parts/${id}/${subid}/${item.sku}`}>
                           <Button size="small" color="inherit">See More...</Button></NavLink>
                        <Button size="small" color="inherit"><ShoppingCartIcon /></Button>
                     </div>
                  </CardActions>
               </Card>
            ))}
         </div>
      </section>
   )
}

export default ProductCards