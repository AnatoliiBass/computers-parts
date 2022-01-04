import ContentContainer from './Content/ContentContainer'
import { grid, container } from './Main.module.css'
import SidebarContainer from './Sidebar/SidebarContainer'

const Main = () => {
   return (<main className={container}>
      <div className={grid}>
         <SidebarContainer />
         <ContentContainer />
      </div>
   </main>)
}

export default Main