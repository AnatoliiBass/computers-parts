import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import style from "../ProductCards/ProductCards.module.css"
import Title from "../../../UI/Title/Title"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink, useParams } from "react-router-dom"
const FilterCards = ({ arrObjects, subnames }) => {
   const { obj } = useParams()
   const arrFilter = obj.split('&')
   let newArr
   if (arrFilter[0] !== 'All') {
      newArr = arrObjects.filter(item => (item.manufacturer === arrFilter[0]))
   } else { newArr = arrObjects }
   newArr = newArr.filter(item => (+item.price >= +arrFilter[1]) && (+item.price <= +arrFilter[2]))
   return (
      <section>
         <Title size="h3" seo="h2" description="Filtering result" />
         {newArr.length === 0 ? (<Typography variant="h5" component="h5">Sorry, no result...</Typography>) :
            (<div className={style.flex}>
               {newArr.map((item, index) => (
                  <Card sx={{ maxWidth: 200 }} key={index + 'filter_' + item.sku} className={style.box}>
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
                           <NavLink to={`/parts/${subnames.filter(i => i.id === item.category_id)[0].parent_id}/${item.category_id}/${item.sku}`}><Button size="small" color="inherit">See More...</Button></NavLink>
                           <Button size="small" color="inherit"><ShoppingCartIcon /></Button>
                        </div>
                     </CardActions>
                  </Card>
               ))}
            </div>)}
      </section>
   )
}

export default FilterCards