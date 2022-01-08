import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import style from "./ProductCards.module.css"
import Title from "../../../UI/Title/Title"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink, useParams } from "react-router-dom"
const ProductCards = ({ arrObjects, subnames }) => {
   const { id, subid } = useParams()
   const elements = arrObjects.filter(item => item.category_id === subid)
   const name = subnames.filter(item => item.id === subid)[0].name
   return (
      <section>
         <Title size="h3" seo="h2" description={name} />
         <div className={style.flex}>
            {elements.map((item, index) => (
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
                        <NavLink to={`/parts/${id}/${subid}/${item.sku}`}><Button size="small" color="inherit">See More...</Button></NavLink>
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