import { grid, container } from './Main.module.css'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'
const Main = ({ state, addCategory, updateCategory, min, max }) => {
   return (<main className={container}>
      <div className={grid}>
         <Sidebar state={state} min={min} max={max} />
         <Content state={state} addCategory={addCategory} updateCategory={updateCategory} />
      </div>
   </main>)
}

export default Main