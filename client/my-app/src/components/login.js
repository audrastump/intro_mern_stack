import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(username, password)
        axios.post('http://localhost:8000/login',{
            username: username,
            password:password,
        })
        .then((response) =>{
            
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
            console.log(localStorage.getItem("authenticated"));
            navigate("/dashboard");
        })
        .catch(error =>{
            console.log(error.response.status);
            if (error.response.status === 404){
                 alert("User does not exist");
            }
             else if (error.response.status ===401){
                alert("Password incorrect");
            }
        })
    }
    return (
        <form className = "login" onSubmit = {handleSubmit}>
            <h1>Log In</h1>
                <label>Username</label>
                <input type = "text" placeholder = "Username " onChange = {(event) => {setUsername(event.target.value)}} value = {username}/>
                <input type = "password" placeholder = "Password " onChange = {(event) => {setPassword(event.target.value)}} value = {password}/>
                <button>Log In</button>
        </form>
    );
    
}
export default Login;