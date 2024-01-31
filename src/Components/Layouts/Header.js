import { useContext } from "react";
import AuthContext from "../../Contexts/auth";
import { NavLink, Link , useLocation} from "react-router-dom";

function Header() {

    const location = useLocation()

    const authContext = useContext(AuthContext)
    return (
        <header>
            <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}><strong>Todo App</strong></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/single/todo"}>To Do</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={{
                                    pathname : "/contact-us",
                                    search : "?send-query",
                                    hash : "#use-hash"
                                }}>Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/about"+ location.search}>About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    {
                    !authContext.authenticated
                    ? <button className="btn btn-success " onClick={()=>authContext.dispatch({type: "login-user"})}>Login</button>
                    : <button className="btn btn-danger " onClick={()=>authContext.dispatch({type: "logout-user"})}>Logout</button>
                }
                </div>
            </nav>
        </header>
    )
}

export default Header;