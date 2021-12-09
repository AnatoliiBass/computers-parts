
import Title from '../../../UI/Title/Title'
import { sectionBox, box } from './Sections.module.css'

const Sections = ({ sections }) => {
   return (
      <div>
         <Title size="h3" seo="h1" description={sections[0]} />
         <div className={sectionBox}>
            {sections[1].split(',').map((item, index) => (
               <div className={box} key={index}><Title size="h4" seo="h3" description={item} /></div>
            ))}
         </div>
      </div>
   )
}

export default Sections