import { Link, NavLink } from "react-router-dom";
import userImage from '../../assets/userImage.png'
// import useAuth from "../../Hooks/useAuth";

const Navbar = () => {

    // const { user, logOut } = useAuth()
    const links = <>
        <li> <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to={'/login'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Login</NavLink></li>
        <li><NavLink to={'/registration'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Registration</NavLink></li>
        {/* <li><NavLink to={'/clients'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Clients</NavLink></li> */}

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-2xl font-semibold">Pay</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {/* {
                user ?
                    <div className="navbar-end gap-2">
                        <div className="w-10 rounded-full tooltip tooltip-left" data-tip={user.displayName}>
                            <img alt="user image" src={user?.photoURL || userImage} />
                        </div>
                        <button onClick={logOut} className="btn">Sign Out</button>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to={'/login'}>
                            <button className="btn">Login</button>
                        </Link>
                    </div>

            } */}
        </div>
    );
};

export default Navbar;