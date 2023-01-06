
import { Navigate } from "react-router-dom";
import axios from "axios";
function Logout(){
    function handleSubmit(e) {
        
        axios.get('http://localhost:8000/logout')
        .then(res => {
            window.location.href = '/login';

        })
        .catch(error => {
            if (error.res.status===400){
                console.log("Could not log out - check username")
        }})
  }
        return (
        <div>
        
                <form onSubmit= {handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
        </div>
        )
    }
    export default Logout;

