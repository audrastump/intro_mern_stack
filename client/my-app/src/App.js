import {Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
function App(){
  return(
    <div>
      <Navbar />
      <Routes>
          <Route exact path = "/login" element = {<Login />} />
          <Route exact path = "/register" element = {<Register />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
          <Route path = "/logout" element = {< Logout/>} />
      </Routes>
    </div>
    
  );
}
export default App;