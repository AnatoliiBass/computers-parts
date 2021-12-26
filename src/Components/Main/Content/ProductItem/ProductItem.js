import style from './ProductItem.module.css'
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import Title from "../../../UI/Title/Title"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useParams } from 'react-router-dom'
import PaginationImages from '../../../UI/PaginationImages/PaginationImages'
import FeaturesTable from '../../../UI/FeaturesTable/FeaturesTable'


const ProductItem = ({ products }) => {
   const { specialid } = useParams()
   const element = products.filter(item => item.sku === specialid)[0]
   return (
      <section>
         <Title size="h3" seo="h2" description={element.name} />
         <div className={style.flex}>
            <PaginationImages images={element.images} />
            <Card sx={{ maxWidth: 500 }} className={style.box}>
               <CardActions className={style.buttons}>
                  <Typography>{`Price: ${element.price} $`}</Typography>
                  <Button size="small" color="inherit"><ShoppingCartIcon /></Button>
               </CardActions>
               <CardContent>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     {element.description}
                  </Typography>
               </CardContent>
            </Card>
         </div>
         <FeaturesTable features={element.features} />
      </section>
   )
}

export default ProductItem