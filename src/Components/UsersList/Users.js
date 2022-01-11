import { Avatar, Button, Pagination, Skeleton, Stack, Typography } from '@mui/material'
import style from './UsersList.module.css'
import avatar from './avatar.jpg'

const Users = (props) => {
   const countPages = Math.ceil(+props.totalUsers / +props.sizePage)
   return (
      <section className={style.listUsers}>
         <Stack spacing={2}>
            <Pagination count={countPages} page={props.currentPage} onChange={props.helperPagination} />
         </Stack>
         {props.users.map((item, index) => (props.isFetching ? <div className={style.skeleton} key={Date.now() + index}><Skeleton variant="rectangular" width="100%" height={118} animation="wave" /></div> :
            <div className={style.itemUser} key={Date.now() + item.id}>
               <div className={style.infoUser}>
                  <div className={style.avatar}><Avatar alt={item.name} src={avatar} /></div>
                  <div>{item.followed ? <Button className={style.btn} disabled={props.followInProgress.some(el => el === item.id)}
                     onClick={() => { props.helperUnFollow(item.id) }} variant="outlined">Unfollow</Button> :
                     <Button className={style.btn} disabled={props.followInProgress.some(el => el === item.id)}
                        onClick={() => { props.helperFollow(item.id) }} variant="outlined">Follow</Button>}</div>
               </div>
               <div className={style.infoUser}>
                  <Typography variant="h4" component="h4">{`${item.id} `}{item.name}</Typography>
                  <Typography variant="h5" component="div">{item.status}</Typography>
               </div>
               <div className={style.infoUser}>
                  <Typography variant="h5" component="div">{item.location.country}</Typography>
                  <Typography variant="h5" component="div">{item.location.city}</Typography>
               </div>
            </div>
         ))}
      </section>
   )
}

export default Users