
// import { useState } from 'react';
// import Button from './Button';
// import DropDown from './DropDown';
// import './Nav.css';
// import { NavItems } from './NavItems';
// import {Link} from 'react-router-dom'
// import Home from './Home';
// const Nav = () =>{

//     const[dropdown,setDropdown] = useState(false);
//     const[homeD,setHome]=useState(false);
//     const showDropDown = () =>{
//         setDropdown(true);
//     }
//     const hideDropdown = () =>{
//         setDropdown(false)
//     }
//     const showHomeDrop = () =>{
//         setHome(true);
//     }
//     const hideHomeDrop =() =>{
//         setHome(false)
//     }

//     return(
//         <div className='nav' >
//             <nav className='navbar'>
// <h2>Nature</h2>
// <ul className='nav-items'>
//     {NavItems.map((navitem) =>{
//         if(navitem.name === "About"){
//             return(
//                 <li key={navitem.id}>
//                    <Link to= {navitem.path} onMouseEnter={showDropDown} onMouseLeave={hideDropdown}>{navitem.name}</Link>
//                   {dropdown &&  <DropDown/>} 
//                 </li>
//             )
//         }
//         if(navitem.name === "Home"){
//             return(
//                 <li key={navitem.id}>
//                    <Link to= {navitem.path} onMouseEnter={showHomeDrop} onMouseLeave={hideHomeDrop}>{navitem.name}</Link>
//                   {homeD &&  <Home/>} 
//                 </li>
//             )
//         }
//         return(
//             <li key={navitem.id}>
//                <Link to= {navitem.path}>{navitem.name}</Link>
              
//             </li>
//         )
       
//     })}
//     <Button/>
    
// </ul>


// </nav>
//         </div>
//     )
// }
// export default Nav;