import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import style from "./ProductCards.module.css"
import card from "./Item.webp"
import Title from "../../../UI/Title/Title"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink } from "react-router-dom"
const ProductCards = ({ arrObjects }) => {
   return (
      <section>
         <Title size="h3" seo="h2" description="Products" />
         <div className={style.flex}>
            {arrObjects.map((item, index) => (
               <Card sx={{ maxWidth: 200 }} key={Math.ceil(Math.random() * 50 + index)} className={style.box}>
                  <CardContent>
                     <Typography variant="h5" component="h5">
                        Name Product
                     </Typography>
                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Description
                     </Typography>
                     <div className={style.image}>
                        <img src={card} alt="Photo product" />
                     </div>
                  </CardContent>
                  <CardActions className={style.buttons}>
                     <NavLink to="/productitem"><Button size="small" color="inherit">See More...</Button></NavLink>
                     <Button size="small" color="inherit"><ShoppingCartIcon /></Button>
                  </CardActions>
               </Card>
            ))}
         </div>
      </section>
   )
}

export default ProductCards