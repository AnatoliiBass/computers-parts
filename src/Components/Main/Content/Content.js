
import { Route, Routes } from 'react-router-dom'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import { content } from './Content.module.css'
import ProductCards from './ProductCards/ProductCards'
import ProductItem from './ProductItem/ProductItem'
import Sections from './Sections/Sections'
const arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
const Content = () => {
   return (
      <section className={content}>
         <Routes>
            <Route path="/" element={<Sections sections={["Computer parts", "Components,Network hardware"]} />} />
            <Route path="/components" element={<Sections sections={["Components", "Sound cards,Video cards"]} />} />
            <Route path="/network" element={<Sections sections={["Network hardware", "Modems,Routers"]} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/productcards" element={<ProductCards arrObjects={arr} />} />
            <Route path="/productitem" element={<ProductItem name="Asus NVidia SX 2345 LD" />} />
         </Routes>
      </section >)
}

export default Content