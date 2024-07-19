// import React, { useState } from 'react'
// import axios from 'axios'
// const Post = () => {
//     const [name,setName]= useState('')
//     const [date,setDate]=useState("")
//     const[email,setEmail] =useState("")
//     const showName = (e) =>{
// setName(e.target.value);

//     }
//     const showDate = (e)=>{
//         setDate(e.target.value)
//     }
//     const showEmail = (e)=>{
//         setEmail(e.target.value)
//     }
//     const submitHandler= (e) =>{
// e.preventDefault();
// const data ={
//     name:name,
//     email:email,
//     date:date
// }

// setName('')
// console.log(data)
// axios.post(url,data).then((res)=>console.log(res.data)).catch((err) =>console.log(err))
// // axios.get(url,data).then((Res)=>console.log(Res.data)).catch((err)=>console.log(err))
   
//     }
//     const url="https://crudcrud.com/api/6ab4cf92972a443591c5bf1819594d48/create"
//   return (
//     <div>
// <form onSubmit={submitHandler}>
//     <input type="text" placeholder='text' value={name} onChange={showName}/>
//     <input type="date" placeholder='Enter Date' value={date} onChange={showDate}/>
//     <input type="email" placeholder='Enter Email' value={email} onChange={showEmail}/>
//     <button type='submit'>Submit</button>
// </form>

//     </div>
//   )
// }

// export default Post;
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Post = () => {
// //     const [name, setName] = useState('');
// //     const [date, setDate] = useState('');
// //     const [email, setEmail] = useState('');

// //     const showName = (e) => {
// //         setName(e.target.value);
// //     };

// //     const showDate = (e) => {
// //         setDate(e.target.value);
// //     };

// //     const showEmail = (e) => {
// //         setEmail(e.target.value);
// //     };

// //     const submitHandler = (e) => {
// //         e.preventDefault();
// //         const data = {
// //             name: name,
// //             email: email,
// //             date: date
// //         };

// //         console.log(data); // Log the data before sending (optional)

// //         axios.post(url, data)
// //             .then((res) => {
// //                 console.log(res.data); // Log the response data if needed
// //                 // Optionally, you can reset the form fields after successful submission
// //                 setName('');
// //                 setEmail('');
// //                 setDate('');
// //             })
// //             .catch((err) => {
// //                 console.error('Error posting data:', err);
// //                 // Handle errors appropriately
// //             });
// //     };

// //     const url = "https://crudcrud.com/api/6ab4cf92972a443591c5bf1819594d48/create";

// //     return (
// //         <div>
// //             <form onSubmit={submitHandler}>
// //                 <input type="text" placeholder='Enter Name' value={name} onChange={showName} />
// //                 <input type="date" placeholder='Enter Date' value={date} onChange={showDate} />
// //                 <input type="email" placeholder='Enter Email' value={email} onChange={showEmail} />
// //                 <button type='submit'>Submit</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Post;