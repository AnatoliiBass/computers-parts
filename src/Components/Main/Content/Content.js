
import About from './About/About'
import Contacts from './Contacts/Contacts'
import { content } from './Content.module.css'
import Sections from './Sections/Sections'
const Content = () => {
   return (
      <section className={content}>
         <Sections sections={["Computer parts", "Components,Network hardware"]} />
         <Sections sections={["Components", "Sound cards,Video cards"]} />
         <Sections sections={["Network hardware", "Modems,Routers"]} />
         <About />
         <Contacts />
      </section>)
}

export default Content