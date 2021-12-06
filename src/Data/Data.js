
//import axios from 'axios'

const Data = () => {
   fetch('https://computers-parts-98eac-default-rtdb.europe-west1.firebasedatabase.app/catalog', {
      method: "GET",
      mode: "no-cors",
   }).then((res, req) => {
      res.json()
   }).then(data => console.log(data)).catch(err => console.log(err))

   return (<div>
      {/* {
         axios.get(`https://computers-parts-98eac-default-rtdb.europe-west1.firebasedatabase.app/catalog`)
            .then(res => {
               const catalog = res.data
               console.log(JSON.parse(catalog))
            })
      } */}
   </div>)
}

export default Data
