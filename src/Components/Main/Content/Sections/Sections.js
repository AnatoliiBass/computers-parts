
import Title from '../../../UI/Title/Title'
import { sectionBox, box } from './Sections.module.css'

const Sections = ({ sections }) => {
   return (
      <div className={sectionBox}>
         {sections.split(', ').map((item, index) => (
            <div className={box} key={index}><Title size="h4" seo="h3" description={item} /></div>
         ))}
      </div>
   )
}

export default Sections