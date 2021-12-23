import { grid, container } from './Main.module.css'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'
const Main = ({ state, dispatch, min, max }) => {
   return (<main className={container}>
      <div className={grid}>
         <Sidebar state={state} min={min} max={max} />
         <Content state={state} dispatch={dispatch} />
      </div>
   </main>)
}

export default Main