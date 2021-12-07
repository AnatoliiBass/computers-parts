import { grid, container } from './Main.module.css'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'
const Main = () => {
   return (<main className={`${grid} ${container}`}>
      <Sidebar />
      <Content />
   </main>)
}

export default Main