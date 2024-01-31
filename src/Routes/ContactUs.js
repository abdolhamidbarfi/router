import { Link, NavLink, Outlet } from "react-router-dom"

function ContactUS() {

    return (
        <div>
            <section className="jumbotron">
                <div className="container jumbotron-fluid d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Contact US Page</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                </div>
            </section>
            <nav className=" navbar navbar-expand-lg navbar-lighr bg-light">
                <div className="container">

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/contact-us"}>To Form</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/contact-us/address"}>To Address</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default ContactUS