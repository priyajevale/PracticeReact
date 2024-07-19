// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Get = () => {
//     const[data,setData]=useState([])
//     const url="https://jsonplaceholder.typicode.com/posts"
//     useEffect(()=>{
//         axios.get(url).then((res)=>{
//             console.log(res) 
//             setData(res.data)})
//     },[])
//     console.log(url)
//   return (
//     <div>
//         <select>
//         {
//          data.map((d)=>{
//             return(
//                 <option>{d.title}</option>
//             )
//         })
//       }
//         </select>
      
//     </div>
//   )
// }

// export default Get;
