import React, {useState} from "react";
import './App.css';
import UsersList from './components/User/UsersList';
import AddUser from './components/User/AddUser';
function App() {
  const [userList,setUserList] = useState([]);
  const addUserhandler = (uName,uAge)=>{
    setUserList((prevList)=>{
      return [...prevList,{name:uName,age:uAge,id:Math.random().toString()}];
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserhandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
