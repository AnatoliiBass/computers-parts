import { grid, container } from './Main.module.css'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'
const Main = ({ store, min, max }) => {
   return (<main className={container}>
      <div className={grid}>
         <Sidebar state={store.getState()} min={min} max={max} />
         <Content store={store} />
      </div>
   </main>)
}

export default Main