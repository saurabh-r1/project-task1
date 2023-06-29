import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";


const App=()=>{
  // const [userDetails,setUserDetails]= useState([
  //   {username:'Saurabh', age:24},
  //   {username:'Sachin', age:19},
  //   {username:'Amit', age:29},
  //   {username:'Abhishek', age:28}
  // ])


  return(
    <div>
      <AddUser/>
      <UserList users={[]} />
    </div>
    
  )
}
export default App;