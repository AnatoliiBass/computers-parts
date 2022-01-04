import { Avatar, Button, Typography } from '@mui/material'
import style from './UsersList.module.css'
import avatar from './avatar.jpg'
import axios from 'axios'

const UsersList = (props) => {



   if (props.users.length === 0) {
      axios.get("http://localhost:3013/users").then(responce => { props.setUsers(responce.data) })
      // props.setUsers([
      //    { id: 1, url: './avatar.jpg', followed: false, name: "Tolyan", status: "Trainee", location: { city: "Chercassy", country: "Ukraine" } },
      //    { id: 2, url: './avatar.jpg', followed: false, name: "Kolyan", status: "QA", location: { city: "Tokio", country: "Japan" } },
      //    { id: 3, url: './avatar.jpg', followed: false, name: "Bodya", status: "Senior", location: { city: "New York", country: "USA" } },
      // ])
   }

   return (<section className={style.listUsers}>
      {props.users.map(item => (
         <div className={style.itemUser} key={item.id}>
            <div className={style.infoUser}>
               <div className={style.avatar}><Avatar alt={item.name} src={avatar} /></div>
               <div>{item.followed ? <Button onClick={() => { props.unfollow(item.id) }} variant="outlined">Unfollow</Button> :
                  <Button onClick={() => { props.follow(item.id) }} variant="outlined">Follow</Button>}</div>
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

export default UsersList