import { grid, container } from './Main.module.css'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'
const Main = () => {
   return (<main className={container}>
      <div className={grid}>
         <Sidebar />
         <Content />
      </div>
   </main>)
}

export default Main