
import './App.css';
import {useState, useEffect} from "react";
import axios from "axios"
function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() =>{
    axios.get("http://localhost:8000/getUsers")
    .then((response) => {
      console.log(response.data);
      setListOfUsers(response.data)
    });
  }, [])
  const createUser = () =>{
    axios.post("http://localhost:8000/addUser", {name:name, age: 0, username: ""}).then((response) =>{
      alert("User created");
    });

  }
  return (
    <div>
      <div className = "usersDisplay">
        {listOfUsers.map((user) =>{
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>
    <div>
      <input type = "text" placeholder = "Name " onChange = {(event) => {setName(event.target.value)}}/>
      <input type = "text" placeholder = "Age "onChange = {(event) => {setAge(event.target.value)}}/>
      <input type = "text" placeholder = "Username "/>
      <button onClick = {createUser}>Create User</button>
    </div>
    </div>
  );
}

export default App;
