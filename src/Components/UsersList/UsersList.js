import { Avatar, Button, Typography } from '@mui/material'
import style from './UsersList.module.css'
import avatar from './avatar.jpg'
import axios from 'axios'

class UsersList extends React.Component {

   componentDidMount() {
      axios.get("http://localhost:3013/users").then(responce => { this.props.setUsers(responce.data) })
   }

   render() {
      return (<section className={style.listUsers}>
         {this.props.users.map(item => (
            <div className={style.itemUser} key={item.id}>
               <div className={style.infoUser}>
                  <div className={style.avatar}><Avatar alt={item.name} src={avatar} /></div>
                  <div>{item.followed ? <Button onClick={() => { this.props.unfollow(item.id) }} variant="outlined">Unfollow</Button> :
                     <Button onClick={() => { this.props.follow(item.id) }} variant="outlined">Follow</Button>}</div>
               </div>
               <div className={style.infoUser}>
                  <Typography variant="h4" component="h4">{item.name}</Typography>
                  <Typography variant="h5" component="div">{item.status}</Typography>
               </div>
               <div className={style.infoUser}>
                  <Typography variant="h5" component="div">{item.location.country}</Typography>
                  <Typography variant="h5" component="div">{item.location.city}</Typography>
               </div>
            </div>
         ))}
      </section>)
   }
}

export default UsersList