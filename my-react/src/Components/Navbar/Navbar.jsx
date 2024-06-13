
import { Outlet, Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="flex w-full justify-center fixed top-0 right-0 bg-red-100 p-4">
            <ul className="flex gap-6">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="*">Blogs</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Navbar;