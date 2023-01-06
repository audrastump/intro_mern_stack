
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  
const loggedInUser = localStorage.getItem("authenticated");

if (!loggedInUser===true) {
    console.log("not authenticated");
      return <Navigate replace to="/login" />;
    } else {
      return (
        <div>
          <p>Welcome to your Dashboard</p>
        </div>
      );
    }
}

export default Dashboard;