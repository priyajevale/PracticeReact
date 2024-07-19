// import React,{useState} from 'react'
// import './DropDown.css';

// const DropDown = () => {
//     const[state,setState] = useState(false);
//     const showDropdown= () =>{
//         setState(true);
//     }
//     const hideDropdown = () =>{
//         setState(false);
//     }
//     // const toggleDropDown = (prevstate) =>{
//     //     setState(prevstate => !prevstate)
//     // }
//   return (
//     <div  className='dropdown' >
//       {/* {/* <div className='dropdown-menu' onClick={showDropdown} onMouseLeave={hideDropdown}> */}
//          <div>Home</div> 
//         <div>Contact-US</div>
//         <div>About</div>
//       {/* <div className='dropdown'> */}
//         {/* <div onClick={toggleDropDown}> */}
//         <div className='dropdown-menu' onClick={showDropdown} onMouseLeave={hideDropdown}>
        
//        DropDown
//        {/* </div> */}
//         {state ? (<ul className='dropdown-list'> 

            
// <li>1 dropdown</li>
// <li>2 dropdown</li>
// <li>3 dropdown</li>




// </ul>
// ):null}
        
//       </div>
     
//     </div>
//   )
// }

// export default DropDown;


// import React from 'react'
// import {  serviceDropDown } from './NavItems'
// import { Link } from 'react-router-dom'
// const DropDown = () => {
//   return (
//     <div>
//       <ul>
//         {serviceDropDown.map((drop) =>{
//             return(
//                 <li key={drop.id}>
// <Link to={drop.path}>{drop.name}</Link>


//                 </li>
//             )
//         })}
//       </ul>
//     </div>
//   )
// }

// export default DropDown;
