
import Title from '../../UI/Title/Title'
import { content } from './Content.module.css'
import Sections from './Sections/Sections'
const Content = () => {
   return (
      <section className={content}>
         <Title size="h3" seo="h1" description="Computer parts" />
         <Sections sections="Components, Network hardware" />
      </section>)
}

export default Content