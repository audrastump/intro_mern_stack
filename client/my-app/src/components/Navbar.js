import { Link } from 'react-router-dom'
const Navbar = () =>{
    return (
        <header>
            <div className = "container">
                <Link to="/">
                    <h1>Log In</h1>
                </Link>
                <Link to="/register">
                    <h1>Register</h1>
                </Link>
                <Link to="/logout">
                    <h1>Logout</h1>
                </Link>
            </div>
        </header>
    );
}
export default Navbar;