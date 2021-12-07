import { Grid } from '@mui/material'
import Title from '../../UI/Title/Title'
import { content, box } from './Content.module.css'
const Content = () => {
   return (
      <section className={content}>
         <Title size="h3" seo="h1" description="Computer parts" />
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
               <Grid item xs={2} sm={4} md={4} key={index}>
                  <div className={box}>xs=2</div>
               </Grid>
            ))}
         </Grid>
      </section>)
}

export default Content