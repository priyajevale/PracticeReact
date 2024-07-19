// // import logo from './logo.svg';
// // import './App.css';
// // import { useSelector,useDispatch } from 'react-redux';
// // import { increment,decrement } from './component/Action';
// // function App() {
// //   const count= useSelector((state)=>state.count )
// //   const dispatch= useDispatch();
// //   return (
// //     <div className="App">
// //      <h1>Redux</h1>
// //     <div className="counter">
// //     <button className='' onClick={() =>dispatch(increment())}>increment</button>
// //      <span> {count}</span>
// //      <button onClick={() => dispatch(decrement())}>decrement</button>
// //     </div>
// //     <select>
// //   <option>delhi</option>
// //   <option>Mumbai</option>
// //   <option>Pune</option>
// // import Counter from "./component/Counter";
// // import { createContext, useState } from "react";
// // import Counter1 from "./component/Counter1";
// // export const globalinfo= createContext();
// // const App = () =>{
// //   const [name] = useState("priya")
// //   return(
// //     <div>
// //       <globalinfo.Provider value={{name1:name}}>
// //       <Counter/>
// //       <Counter1/>
// //      </globalinfo.Provider>
// //     </div>
// //   )
// // }
// import React, { useState } from 'react';
// // import DropDown from "./component/DropDown"
// import Nav from './component/Nav';
// import { BrowserRouter as Router} from 'react-router-dom';
// // import Reqres from './

import RadioButton from "./component/RadioButton"

    
//     import Country from './Reqres.json'
// import Post from './component/Post';
// import Get from './component/Get';

// // export default App;


// const App = () =>{
//   // const[gender,setGender] =useState("Male");
//   // const femaleGender =(e) =>{
//   //   setGender(e.target.value)
//   // }
//   // const MaleGender =(e) =>{
//   //   setGender(e.target.value)
//   // }
//   // const [visible,setVisible] = useState(false);
//   // const visibilityDisplay = () =>{
//   //   setVisible(true)
//   // }
//   // const visibilityHide = () =>{
//   //   setVisible(false)
//   // }

// //  const[select,setSelect] =  useState("Apple");
// //  const selectSet=(e)=>{
// //   setSelect(e.target.value)
// //  }
// // Cascading Dropdowns
// // const states= ["maharashtra","telangana", "UP"]
// // const cities={
// //   "maharashtra":['g','h','i'],
// //   "telangana" :['i','k','j'],
// //   "UP":['p','o','u']

// // }
// // const [selectedstate,setSelectedState] =  useState("");
// // const showState = (e) =>{
// //   setSelectedState(e.target.value);
// //   console.log(e.target.value);
// // Practice dropdown---------------------------------------
// // three cascading dropdowns--------------------------------------------------------------------------------------
// // const state=["telangana","maharashtra"]
// // const cities = {
// //   "telangana":["Hyderabad","Chennai"],
// //   "maharashtra" :["Mumbai","Pune"]
// // };
// // const Stedium={
// //   "Hyderabad": ["Nehru","Rajiv"],
// //   "Chennai":["piinnu" ," karau"],
// //   "Mumbai" : ["vankhede","modi"],
// //   "Pune":["parajit","pumkin"]
// // };
// // const details = {
// //   "Nehru": ['s','p'],
// //   "Rajiv" :['d','r'],
// //   "piinu" :['d','i'],
// //   "parajit" :['o','d'],
// //   "pumkin" :["h","d"],
// // }
// //   const[selectedState,setState] =useState("")
// //   const[selectedCity,setCity] =useState( " ")
// //   const[stadium,setStadium] =useState("")
// //   const[detail,setDetails] =useState(" ")
// //   const selectedStates=(e)=>{
// //     setState(e.target.value);
  
// //   }
 
// //   const selectedCities = (e) =>{
// //     setCity(e.target.value);
// //   }
// //   const showStadium = (e) =>{
// //     setStadium(e.target.value);
// //   }
// //   const showDetails = (e) =>{
// //     setDetails(e.target.value)
// //   }
// //   console.log(selectedState)
// const[cname,setName] =useState("");
// const showCname = (e) =>{
//   setName(e.target.value)
// }

//   return (
   
//   //   <Router>
  
//   //       <div>
//   //  <Nav/>

//   //  </div>
 
  
//   // </Router>
//   <div>
  

// {/* <h2> {gender}</h2>
// <input type="radio" name="gender" value="Male"  onChange={MaleGender}/> Male
// <input type="radio" name="gender" value="Female" onChange={femaleGender} />Female


// <div>
//   <input type="checkbox" name="java" value="java" /> java
//   <input type="checkbox" name="java" value="python" /> python
//   <input type="checkbox" name="java" value="javaScript" /> javaScript */}
// {/* </div> */}
// {/* <label>UserName</label>
// <div>
// <input type="text" name="userName" />
// </div>

// <div>
//   <label>Address </label>
//   <input type="radio" name="radio" value="Yes" onChange={visibilityDisplay} /> Yes
//   <input type="radio" name="radio" value="No" onChange={visibilityHide}/>No

//   {visible && <div><p> where did you live ?</p><textarea type="text" name="msg" placeholder='enter address' />  <p> tell me the Complete address?</p></div>}
// </div>
// <button type="submit">Submit</button>
//   </div> */}
//    {/* dropdown      ----------------------------------------------------------------------*/}
// {/* <h1 >{select}</h1>
// <select onChange={selectSet}>
//   <option>Apple</option>
//   <option>Mango</option>
//   <option>Orange</option>
// </select> */}
 

//  {/* Cascading DropDowns */}

//  {/* <select onChange={showState}>
// {states.map((s) =>{
//   return(
//     <option key={s.id}>{s}</option>
//   )
// })}
//  </select>
//  <div>
//  {selectedstate &&<select>
//   {
//     cities[selectedstate].map((city) =>{
//       return(
//         <option key={city.id}>{city}</option>
//       )
//     })
//   }
//  </select>}
//  </div> */}

//  {/* // three dependent cascading dropdowns==--------------------------------------------------- */}
//  {/* <select onChange={selectedStates}>
//   {state.map((s) =>{
//     return(
//       <option key={s.id}>{s}</option>
//     )
//   })}
//  </select>
//  <div>
//   <h1>State Details</h1>
//   {selectedState && cities[selectedState]&&( <select onChange={selectedCities} >
//     {
//       cities[selectedState].map((c)=>{
//         return(
//         <option key={c.id}>{c}</option>
//       )})
//     }
//   </select>)}
//  </div>
//  <div>
//   <h1> City Details</h1>
//   {selectedCity && Stedium[selectedCity] &&( <select onChange={showStadium}>
//     {
//       Stedium[selectedCity].map((sh) =>{
//         return(
//           <option key={sh.id}>{sh}</option>
//         )
//       })
//     }
//   </select>)}
//  </div>
//  <div>
//  <h1>stadium details</h1>
//   {stadium && details[stadium] &&  <select onChange={showDetails}>
    
// {
//   details[stadium].map((d) =>{
//     return(
//       <option key={d.id}>{d}</option>
//     )
//   })
// }


//   </select> }
//  </div> */}
 
//  {/* <select onChange={showCname}> <option> Select Dropdown----</option>
//   {
// Country.country.map((R) =>{
//   return(
//     <option key={R.id}>{R.cname}</option>
//   )
// })
//   }
//  </select>


//  <div><h1>{cname}</h1></div> */}
//  <Get/>
 
//  </div>
//   )
// }
// export default App;

// radio buttons "yes and  NO"
const App =() =>{
  return(
    <div>
      <RadioButton/>

    </div>
  )
}
export default App;