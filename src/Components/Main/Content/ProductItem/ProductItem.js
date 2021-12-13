import style from './ProductItem.module.css'
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import card from "./Item.webp"
import Title from "../../../UI/Title/Title"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductItem = ({ name }) => {
   return (
      <section>
         <Title size="h3" seo="h2" description={name} />
         <div className={style.flex}>
            <div className={style.box}>
               <img src={card} alt="Some product" />
            </div>
            <Card sx={{ maxWidth: 250 }} className={style.box}>
               <CardContent>
                  <Typography variant="h5" component="h5">
                     Model
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     Description
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     Description
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     Description
                  </Typography>
               </CardContent>
               <CardActions className={style.buttons}>
                  <Button size="small" color="inherit"></Button>
                  <Button size="small" color="inherit"><ShoppingCartIcon /></Button>
               </CardActions>
            </Card>
         </div>
      </section>
   )
}

export default ProductItem