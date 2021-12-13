import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import style from "./ProductCards.module.css"
import Title from "../../../UI/Title/Title"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink } from "react-router-dom"
const ProductCards = ({ arrObjects }) => {
   return (
      <section>
         <Title size="h3" seo="h2" description="Products" />
         <div className={style.flex}>
            {arrObjects.map(item => (
               <Card sx={{ maxWidth: 200 }} key={item.sku} className={style.box}>
                  <CardContent>
                     <Typography variant="h5" component="h5">
                        {item.name}
                     </Typography>
                     <div className={style.image}>
                        <img src={item.images[0].url} alt="Some product" />
                     </div>
                  </CardContent>
                  <CardActions className={style.buttons}>
                     <NavLink to="/productcards/productitem"><Button size="small" color="inherit">See More...</Button></NavLink>
                     <Button size="small" color="inherit"><ShoppingCartIcon /></Button>
                  </CardActions>
               </Card>
            ))}
         </div>
      </section>
   )
}

export default ProductCards