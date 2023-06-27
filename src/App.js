import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";


const App=()=>{
  const [userDetails,setUserDetails]= useState([
    {username:'Saurabh', age:24},
    {username:'Sachin', age:19},
    {username:'Amit', age:29},
    {username:'Abhishek', age:28}
  ])


  return(
    <div>
      <AddUser/>
    </div>
    
  )
}
export default App;